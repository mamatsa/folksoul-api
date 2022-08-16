import SwaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

const swaggerMiddleware: any = () => {
  const options = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Admin panel API Specs',
  }

  const swaggerDocument = YAML.load('./src/config/swagger.yaml')
  return [SwaggerUI.serve, SwaggerUI.setup(swaggerDocument, options)]
}

export default swaggerMiddleware
