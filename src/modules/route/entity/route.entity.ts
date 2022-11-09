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
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../../user/entity/user.entity";
import { IRoute } from "./interfaces/IRoute.interface";

@Entity("routes")
export class Route implements IRoute {
  @PrimaryGeneratedColumn("uuid")
  @IsNotEmpty()
  @IsUUID("all")
  id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

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

  @Column()
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ManyToOne(() => User, (user: User) => user.id)
  @JoinColumn()
  @Index("route-user-idx")
  user: User;
}
