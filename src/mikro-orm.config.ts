import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    glob: "!(*.d).{js,ts}",
  },
  entities: [Post, User],
  dbName: "lireddit",
  user: "postgres",
  password: "123456",
  type: "postgresql",
  debug: !__prod__,
  allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];
