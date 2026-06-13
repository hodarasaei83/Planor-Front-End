'use client'

import { Card } from '@/components/ui/card'
import { Icon } from '@/features/shared/icons'

export const FeaturesSection = () => {
  return (
    <div className="h-[calc(100lvh-150px)]">
      <h1 className="scroll-m-20 text-center text-3xl font-bold text-balance">
        تمام چیزی که برای برنامه ریزی نیاز دارید!
      </h1>
      <div className="flex justify-evenly items-center mt-15 mx-15">
        <Card className="relative w-full max-w-sm hover:shadow-lg p-5 bg-secondary">
          <Icon
            name="solar-infinity-outline"
            width={60}
            height={60}
            className="bg-chart-2 rounded-2xl p-2"
          />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            متمرکز بمانید
          </h3>
          <p className="leading-7 mb-3">
            رابط کاربری تمیز و بدون حواس‌پرتی که برای کمک به شما در تمرکز روی
            مهم‌ترین چیزها طراحی شده است.
          </p>
        </Card>
        <Card className="relative w-full max-w-sm hover:shadow-lg p-5 bg-secondary">
          <Icon
            name="solar-clipboard-list-outline"
            width={60}
            height={60}
            className="bg-muted-foreground rounded-2xl p-2"
          />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            تابلو های تخصصی
          </h3>
          <p className="leading-7 mb-3">
            گردش کار خود را با تابلوهای کشیدن و رها کردن بصری تجسم کنید. وظایف
            را به راحتی از طریق مراحل جابجا کنید.
          </p>
        </Card>
        <Card className="relative w-full max-w-sm hover:shadow-lg p-5 bg-secondary">
          <Icon
            name="solar-users-group-two-rounded-outline"
            width={60}
            height={60}
            className="bg-sidebar-primary rounded-2xl p-2"
          />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            همکاری تیمی
          </h3>
          <p className="leading-7 mb-3">
            وظایف را تعیین کنید، به‌روزرسانی‌ها را به اشتراک بگذارید و همه را در
            راستای اهداف هماهنگ نگه دارید.
          </p>
        </Card>
      </div>
    </div>
  )
}
