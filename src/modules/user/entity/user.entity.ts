import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IUser } from "./interfaces/IUser.interface";

@Entity("users")
export class User implements IUser {
  @PrimaryGeneratedColumn("uuid")
  @IsNotEmpty()
  @IsUUID("all")
  id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  deviceId: string;

  @CreateDateColumn()
  @IsNotEmpty()
  @IsDate()
  created_at: Date;

  @UpdateDateColumn()
  @IsNotEmpty()
  @IsDate()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  @IsOptional()
  @IsDate()
  deleted_at: Date;
}
