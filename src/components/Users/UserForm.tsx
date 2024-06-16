import { Button, Input } from "../../ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User } from "../../types/User";

type UserFormProps = {
    initData?: Partial<User>;
    onSubmit : (data : User) => void;
};

const userFormSchema = z.object({
    id: z.number().optional(),
    nickname : z.string().min(1, "Nickname is required"),
    age : z.number().min(1,"Age is required"),
});

export const UserForm = ({initData,onSubmit} : UserFormProps) => {
    const { register, handleSubmit, formState: {errors}} = useForm<User>({
        resolver : zodResolver(userFormSchema),
        defaultValues : initData
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input label="Nickname" {...register("nickname")}/>
                {errors.nickname && <p className="text-red-600">{errors.nickname.message}</p>}
            </div>
            <div>
                <Input label="Age" type="number" {...register("age",{setValueAs: value => parseInt(value,10) })}/>
                {errors.age && <p className="text-red-600">{errors.age.message}</p>}
            </div>
            <Button label="Submit"/>
        </form>
    )
};