'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { JoinSchema, JoinType } from '../models/credentials'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/shared/ui/form'
import { Input } from '@/components/shared/ui/input'
import { Button } from '@/components/shared/ui/button'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import EynSvg from '@/components/shared/assets/eyn.svg'
import TbankSvg from '@/components/shared/assets/tbank.svg'
import GoogleSvgSvg from '@/components/shared/assets/googleSvg.svg'
import { motion } from 'motion/react'
import { useState } from 'react'
import { createNewUser } from '@/server/actions/users'
import { useAction } from "next-safe-action/hooks";
import { toast } from '@/components/shared/hooks/use-toast'
import { useRouter } from "next/navigation";


export const JoinForm = () => {
    const router = useRouter()
    const [isShowPassword, setIsShowPassword] = useState(false)

    const form = useForm<JoinType>({
        resolver: zodResolver(JoinSchema),
        defaultValues: {
            name: "",
            email: '',
            password: '',
        }
    })

    const { execute } = useAction(createNewUser, {
        onSuccess(data) {
            if (data.data?.error) {
                toast({
                    title: 'error',
                    description: data.data.error,
                    variant: 'destructive',
                });
                router.push("/auth/join");
            } else if (data.data?.success) {
                toast({
                    title: 'success',
                    description: data.data.success,
                    variant: 'default',
                });
                router.push("/auth/login");
            }
        },
    });

    const onSubmit = (value: JoinType) => {
        execute(value)
    }

    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.3, delay: .15, ease: "linear" }}

            className='flex flex-col gap-4'>
            <Form {...form}>
                <div className='flex gap-2 flex-col items-center justify-center mb-5'>
                    <Image width={48} height={48} src={EynSvg} alt="Eyn" className='mb-2' />
                    <h2 className='text-2xl font-semibold font-sans leading-none text-foreground'>Зарегистрируйтесь в ЭЙН</h2>
                    <p className='text-sm font-normal font-sans'>Ваш финансовый помощник</p>
                </div>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Имя
                                </FormLabel>
                                <FormControl>
                                    <Input type='text' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input type='email' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Пароль
                                </FormLabel>
                                <div className='relative'>
                                    <FormControl>
                                        <Input type={isShowPassword ? "text" : 'password'} {...field} className='pr-12' />
                                    </FormControl>
                                    <span className='position absolute right-3 top-1/2 -translate-y-1/2' onClick={() => setIsShowPassword(!isShowPassword)}>
                                        {isShowPassword ? <Eye /> : <EyeOff />}
                                    </span>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button>
                        Продолжить <ArrowRight className='primary-foreground' />
                    </Button>
                </form>
            </Form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="bg-background px-2 text-muted-foreground">или авторизуйтесь через</span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <Button variant={'outline'} className='flex'>
                    <Image width={16} height={16} src={GoogleSvgSvg} alt={'icon'} /><span className='flex-1 leading-6 text-sm font-medium font-sans'>Google</span>
                </Button>
                <Button disabled variant={'outline'} className='flex'>
                    <Image width={16} height={16} src={TbankSvg} alt={'icon'} /><span className='flex-1 leading-6 text-sm font-medium font-sans'>Т-Банк</span>
                </Button>
            </div>
            <p className='text-center'>Уже зарегистрированы? <Link className='underline underline-offset-2' href={'/auth/login'}>Войти</Link></p>
        </motion.div>
    )
}