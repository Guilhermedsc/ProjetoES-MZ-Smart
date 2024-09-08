import { constants } from 'src/utils/constants'
import { DataSource } from 'typeorm'

export const DatabaseProviders = [
  {
    provide: constants.DatabaseSource,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) || 27017,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      })
      return dataSource.initialize()
    },
  },
]