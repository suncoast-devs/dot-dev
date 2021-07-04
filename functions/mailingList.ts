import { Handler } from '@netlify/functions'

// givenName, familyName, emailAddress
const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST',
    },
  }
}

export { handler }
