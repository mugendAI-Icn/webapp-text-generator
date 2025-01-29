import { type NextRequest } from 'next/server'
import { client, getInfo } from '@/app/api/utils/common'

// Node.js ランタイムを使用するように設定
export const runtime = 'nodejs'
// タイムアウトを30秒に設定
export const maxDuration = 200

export async function POST(request: NextRequest) {
  const body = await request.json()
  const {
    inputs,
    files,
  } = body
  const { user } = getInfo(request)

  // レスポンスヘッダーの設定
  const headers = new Headers({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    'Connection': 'keep-alive',
  })

  try {
    const res = await client.runWorkflow(inputs, user, true, files)
    return new Response(res.data as any, { headers })
  }
  catch (error: unknown) {
    // エラーハンドリングの改善
    console.error('Workflow execution error:', error)
    return new Response(
      JSON.stringify({
        error: 'Workflow execution failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }
}
