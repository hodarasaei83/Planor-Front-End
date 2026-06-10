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

export function RegisterForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    setLoading(true)
    setError('')

    try {
      await authApi.register({
        name: formData.get('name') as string,
        username: formData.get('username') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirmPassword') as string,
      })
      router.push('/home')
      console.log(formData.get('name'))
    } catch (err) {
      setError(getErrorMessage(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto my-auto h-full">
      <CardHeader className="flex flex-col items-center justify-center">
        <CardTitle>ساخت اکانت</CardTitle>
        <CardDescription className="mb-3">
          به جمع حرفه‌ای‌ها بپیوندید و از امروز پروژه‌هایتان را سامان دهید
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
            <Label htmlFor="name">نام و نام خانوادگی</Label>
            <Input
              id="name"
              name="name"
              placeholder="نام و نام خانوادگی را وارد کنید"
              required
              disabled={loading}
            />
          </div>

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
            <Label htmlFor="email">ایمیل</Label>
            <Input
              id="email"
              name="email"
              placeholder="ایمیل را وارد کنید"
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">تکرار رمز عبور</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="confirmPassword"
              placeholder="رمز عبور را مجددا وارد کنید"
              required
              disabled={loading}
            />
          </div>

          <Button type="submit" className="w-full mt-2" disabled={loading}>
            {loading ? '...درحال ارسال' : 'ساخت اکانت'}
          </Button>

          <div className="text-center space-x-1.5">
            <span>اکانت دارید؟</span>
            <a
              href="/login"
              className="ml-auto inline-block text-sm underline-offset-4 text-primary "
            >
              ورود
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
