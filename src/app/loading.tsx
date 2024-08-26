'use client';
import { Spinner } from "@nextui-org/react";

const Loading = ({className} : {className?: string}) => {
    return (
      <div className="flex flex-col items-center gap-y-5">
        <p>در حال دریافت اطلاعات ‌ملک‌‌ها</p>
        <Spinner size="md" color="primary" />
      </div>
    )
  }

export default Loading;