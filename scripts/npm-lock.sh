
mkdir .tmp
cd .tmp
cp ../package.json .
npm install --only=prod --package-lock-only
cp package-lock.json ../
cd ..
rm -rf .tmp
echo "package-lock.json updated"
