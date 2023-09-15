import {
  IsNotEmpty,
  IsDate,
  IsOptional,
  IsString,
  IsUUID,
  IsNumber,
} from "class-validator";
import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Index,
  PrimaryGeneratedColumn,
  Entity,
} from "typeorm";
import { Product } from "../../product/entity/product.entity";
import { User } from "../../user/entity/user.entity";
import { IStock } from "./interfaces/IStock.interface";

@Entity("stocks")
export class Stock implements IStock {
  @PrimaryGeneratedColumn("uuid")
  @IsNotEmpty()
  @IsUUID("all")
  id: string;

  @Column({ type: "int" })
  @IsNotEmpty()
  @IsNumber()
  code: number;

  @Column({ type: "int" })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @Column({ type: "float" })
  @IsNotEmpty()
  @IsNumber()
  costValue: number;

  @Column({ type: "float" })
  @IsNotEmpty()
  @IsNumber()
  saleValue: number;

  @Column()
  @IsNotEmpty()
  @IsDate()
  purchaseDate: Date;

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

  @Column()
  @IsNotEmpty()
  @IsString()
  productId: string;

  @ManyToOne(() => Product, (product: Product) => product.id)
  @JoinColumn()
  product: Product;

  @ManyToOne(() => User, (user: User) => user.id)
  @JoinColumn()
  @Index("stock-user-idx")
  user: User;
}
