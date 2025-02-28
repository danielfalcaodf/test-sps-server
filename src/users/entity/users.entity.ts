
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { TypeUser } from "../enum/type-user.enum";
import bcrypt from 'bcrypt';
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column('enum', {
    enum: TypeUser,
    default: TypeUser.USER,
  })
  type!: TypeUser;

  @Column()
  password!: string;

  @BeforeInsert()
  @BeforeUpdate()
  async encryptPassword() {
    const regex = /\$2[a-z]\$12\$/;

    if (this.password && !regex.test(this.password)) {
      const salt = bcrypt.genSaltSync(12);

      this.password = await bcrypt.hash(this.password, salt);

    }
  }
}
