'use client';

import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchemas, LoginTypes } from '../models/credentials'
import { Button } from "shared/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "shared/ui/form"
import { Input } from 'shared/ui/input'

export const LoginForm = () => {
    const form = useForm<LoginTypes>({
        resolver: zodResolver(LoginSchemas),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = (values: LoginTypes) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input autoComplete='off' placeholder="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input autoComplete='off' type='password' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>

    )
}