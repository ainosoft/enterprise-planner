pipeline{
    agent any 
    environment {
        PROJECT_DIR = 'enterprise-planner/'
    }
    stages{
        stage('Build UI resources'){
            when{
               anyOf {
                 branch 'review*'
                 branch 'candidate'
                }
                not{
                     changelog '.*\\[maven-release-plugin\\].*'
                }
                not{
                   changelog 'Site Deployment' 
                }
            }
            steps{
                dir("${PROJECT_DIR}"){
                    nodejs('node-js-12.14.0'){
                        withEnv(['npm_config_cache=npm-cache','HOME=.',]){
                             sh '''
                             rm -rf package-lock.json
                             rm -rf node_modules
                             npm set //npm.pkg.github.com/:_authToken ${GIT_ACCESS_TOKEN}
                             npm install
                             ng build --prod --base-href
                             mkdir -p webapps/enterprise
                             pwd
                             ls $(pwd)
                             cp -r dist/enterprise-planner/* webapps/enterprise/
                             ls  webapps/enterprise/
                             '''
                        }
                    }
                }
            }
        }
        stage('Stage Build'){
            when{
              anyOf {
                 branch 'review*'
                 branch 'candidate'
                }
                not{
                     changelog '.*\\[maven-release-plugin\\].*'
                }
                not{
                   changelog 'Site Deployment' 
                }
            }
            steps{
              dir("${PROJECT_DIR}"){
                  sh '''#!/bin/bash
                        freePort(){
                             while true
                             do
                                random_port=$(( ((RANDOM<<15)|RANDOM) % 49152 + 10000 ))
                                status="$(nc -z 127.0.0.1 $random_port < /dev/null &>/dev/null; echo $?)"
                                if [ "${status}" != "0" ]; then
                                    echo "$random_port";
                                    break;
                                fi
                            done
                        }
                        freePortJetty=$(freePort)  
                        myJettyName='enterprise-jetty'
                        docker stop $myJettyName || true
                        docker rm $myJettyName || true
                        
                        echo "Starting docker jetty container"
                        pwd
                        ls $(pwd)/webapps/enterprise/
                        docker run --name $myJettyName -d -p $freePortJetty:8080 --mount type=bind,source=$(pwd)/webapps,destination=/var/lib/jetty/webapps jetty
                                          
                        ipAddr="$(ip -o route get to 8.8.8.8 | sed -n 's/.*src \\([0-9.]\\+\\).*/\\1/p')"
                        echo "Staged url - > http://$ipAddr:$freePortJetty/"
                  '''
              }  
            }
        }

    }
}

