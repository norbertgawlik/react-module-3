import { useForm } from "react-hook-form"
import { Button, Input } from "../../ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { type User } from "../../types/User";

type UserFormPropsType = {
    initData? : Partial<User>,
    onSubmit : (user : User) => void;
};

const usersFormSchema = z.object({
    id : z.number().optional(),
    nickname : z.string().min(1,"Nickname is required"),
    age : z.preprocess((val)=>Number(val),z.number().min(1,"Age should be positive"))
});

export const UsersForm = ({initData,onSubmit} : UserFormPropsType) => {
    const { register, handleSubmit, formState: { errors },} = useForm<User>({
        resolver : zodResolver(usersFormSchema),
        defaultValues : initData
    });

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input label="nickname" {...register("nickname")}/>
                {errors.nickname && <p className="text-red-600">{errors.nickname.message}</p>}
            </div>
            <div>
                <Input type="number" label="age" {...register("age")}/>
                {errors.age && <p className="text-red-600">{errors.age.message}</p>}
            </div>
            <Button label="ADD"/>
        </form>
    );
};