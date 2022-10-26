import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDate,
  IsUUID,
} from "class-validator";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity("users")
export class User {
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
  device_id: string;

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
