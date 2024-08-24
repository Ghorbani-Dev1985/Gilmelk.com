'use client';
import { Spinner } from "@nextui-org/react";

const Loading = ({className} : {className?: string}) => {
    return <Spinner size="md" color="primary" className={className}/>
  }

export default Loading;