import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ENV_KEYS } from './index';

class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];

    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return ENV_KEYS.POSTGRES_PORT;
  }

  public isProduction() {
    // @FIXME;
    const mode = process.env.NODE_ENV;
    // return mode != 'DEV';
    return false;
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: ENV_KEYS.POSTGRES_HOST,
      port: parseInt(ENV_KEYS.POSTGRES_PORT),
      username: ENV_KEYS.POSTGRES_USER,
      password: ENV_KEYS.POSTGRES_PASSWORD,
      database: ENV_KEYS.POSTGRES_DATABASE,
      entities: ['dist/**/*.entity.js'],
      migrationsTableName: 'migration',
      migrations : [
        "dist/migration/**/*.js"
      ],
      cli: {
        migrationsDir: 'src/migration',
      },
      ssl: this.isProduction(),
    };
  }

}

const configService = new ConfigService(process.env);

export { configService };
