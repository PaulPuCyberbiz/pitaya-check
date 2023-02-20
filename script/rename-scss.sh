cd ./src/assets/stylesheets/pitayas
for i in *.scss; do mv -- "$i" "${i%.scss}.module.scss"; done