import {MigrationInterface, QueryRunner} from "typeorm";

export class entity1600038211486 implements MigrationInterface {
    name = 'entity1600038211486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "being" ("being_id" SERIAL NOT NULL, "name" character varying NOT NULL, "greek_name" character varying, "roman_name" character varying, "category" character varying NOT NULL, "description" character varying, "gender" character varying, "image_thumbnail" character varying, "image_regular" character varying, "father" integer, "mother" integer, "spouses" integer array DEFAULT '{}'::int[], "lovers" integer array NOT NULL DEFAULT '{}'::int[], "children" integer array NOT NULL DEFAULT '{}'::int[], "books" integer array NOT NULL DEFAULT '{}'::int[], "events" integer array NOT NULL DEFAULT '{}'::int[], CONSTRAINT "PK_4e6b23c3045c33af7a555a83f32" PRIMARY KEY ("being_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "being"`);
    }

}
