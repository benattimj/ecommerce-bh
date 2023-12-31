"use client";

import * as z from "zod";

import { zodResolver} from "@hookform/resolvers/zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../modal";
import { useForm } from "react-hook-form";
import { Form, FormField } from "../form";
const formSchema = z.object( {
    name: z.string().min(1),

});

export const StoreModal = () => {
    const storeModal = useStoreModal ();

    const form = useForm<z.infer<typeof formSchema>> ({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    }) 

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return (
        <Modal
          title="Create store"
          description="Add a new store to manage products and categories."
          isOpen={storeModal.isOpen} 
          onClose={storeModal.onClose}
        >

<div className="space-y-4 py-2 pb-4">
        <Form {...Form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) =>}
                        >

                    </FormField>


            </form>

        </Form>

</div>

       </Modal>



    );

};