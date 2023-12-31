import { Entity, PrimaryKey, Property, OptionalProps } from "@mikro-orm/core";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity()
export class User {
  [OptionalProps]?: "createdAt" | "updatedAt";

  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field()
  @Property({ type: "text", unique: true })
  username!: string;

  // we are not exposing this field to type graphql
  @Property({ type: "text" })
  password!: string;
}
