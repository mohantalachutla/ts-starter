import * as dotenv from 'dotenv'
import * as dotenvExpand from 'dotenv-expand'
dotenvExpand.expand(dotenv.config())

// Code here
import { run } from './app'

run()
