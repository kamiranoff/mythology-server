import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Being extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'being_id' })
  beingId: number;

  @Column()
  name: string;

  @Column({ name: 'greek_name', nullable: true })
  greekName: string;

  @Column({ name: 'roman_name', nullable: true })
  romanName: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  image_thumbnail: string;

  @Column({ nullable: true })
  image_regular: string;

  @Column({ nullable: true })
  father: number;

  @Column({ nullable: true })
  mother: number;

  @Column('int',{ array: true, nullable: true, default: '{}' })
  spouses: number[];

  @Column('int',{ array: true, default: '{}' })
  lovers: number[];

  @Column('int',{ array: true, default: '{}' })
  children: number[];

  @Column('int',{ array: true, default: '{}' })
  books: number[];

  @Column('int',{ array: true, default: '{}' })
  events: number[];
}
