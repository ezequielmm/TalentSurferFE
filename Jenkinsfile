pipeline {
  agent any
  tools {nodejs "NodeJS"}
  environment {
    registry = 'talentsurfer/frontendui'
    registryCredential = 'acr'
  }
  stages {
    stage('INSTALL PACKAGES') {
      steps {
        sh "npm install"
      }
    }
    stage('TEST') {
      steps {
        echo "insert your testing here"
      }
    }
    stage('BUILD APP') {
      steps {
        sh "node_modules/.bin/ng build"
      }
    }
    stage("BUILD DOCKER") {
      steps {
        script {
          dockerImageBuild = docker.build registry + ":latest"
        }
      }
    }
     stage("DEPLOY DOCKER") {
       steps {
          script {
            docker.withRegistry('https://usceyshddcr001.azurecr.io', registryCredential) {
              dockerImageBuild.push()
            }
         }
      }
   }
    stage("DEPLOY & ACTIVATE") {
      steps {
        echo 'this part will differ depending on setup'
      }
    }
  }
}