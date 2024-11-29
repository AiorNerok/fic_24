'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Form } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "shared/ui/form"
import { Button } from "shared/ui/button"
import { Input } from "shared/ui/input"
import { JoinSchemas, JoinTypes } from "../models/credentials"

export const JoinForm = () => {
    const form = useForm<JoinTypes>({
        resolver: zodResolver(JoinSchemas),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
    })

    const onSubmit = (values: JoinTypes) => {
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
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>confirmPassword</FormLabel>
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