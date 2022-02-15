#!/bin/bash

if [ "${CIRCLE_BRANCH}" == "develop" ]
then
  export NODE_ENV=development
  export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} # AWS_ACCESS_KEY_ID_DEV
elif [ "${CIRCLE_BRANCH}" == "staging" ]
then
  export NODE_ENV=staging
  export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} # AWS_ACCESS_KEY_ID_STAGE
elif [ "${CIRCLE_BRANCH}" == "main" ]
then
  export NODE_ENV=production
  export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} # AWS_ACCESS_KEY_ID_PROD
fi

echo "Sucessfull build for environment: ${NODE_ENV}"

exit 0
