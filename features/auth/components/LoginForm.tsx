'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authApi, getErrorMessage } from '@/features/auth/api/authApi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    setLoading(true)
    setError('')

    try {
      await authApi.login({
        username: formData.get('username') as string,
        password: formData.get('password') as string,
      })
      router.push('/home')
    } catch (err) {
      setError(getErrorMessage(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto my-auto h-full">
      <CardHeader className="flex flex-col items-center justify-center">
        <CardTitle>ورود به اکانت</CardTitle>
        <CardDescription className="mb-3">
          برای مشاهده پروژه‌های خود وارد شوید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="username">نام کاربری</Label>
            <Input
              id="username"
              name="username"
              placeholder="نام کاربری را وارد کنید"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">رمز عبور</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="رمز عبور را وارد کنید"
              required
              disabled={loading}
            />
            <a
              href="#"
              className="flex justify-end ml-2 text-sm underline-offset-4 text-primary"
            >
              رمز عبور را فراموش کرده اید؟
            </a>
          </div>

          <Button type="submit" className="w-full mt-2" disabled={loading}>
            {loading ? '...درحال ارسال' : 'ساخت اکانت'}
          </Button>

          <div className="text-center space-x-1.5">
            <span>اکانت ندارید؟</span>
            <a
              href="/register"
              className="ml-auto inline-block text-sm underline-offset-4 text-primary "
            >
              ساخت اکانت
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
