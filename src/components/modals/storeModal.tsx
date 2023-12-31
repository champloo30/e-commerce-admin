'use client'

import * as z from 'zod'
import { useStoreModal } from "@/hooks/useStoreModal"
import { Modal } from "@/components/ui/modal"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  name: z.string().min(1),
})

export function StoreModal() {
  const storeModal = useStoreModal()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    // TODO: Create Store
  }

  return (
    <Modal 
      title="Create Store" 
      description="Add a new store to manage products and categories" 
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField 
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='E-Commerce' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full pt-6 space-x-2 flex justify-end items-center">
                <Button variant='outline' onClick={storeModal.onClose}>Cancel</Button>
                <Button type='submit'>Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}