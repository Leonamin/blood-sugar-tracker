#! /bin/zsh

if [ $# -eq 0 ]; then
    echo "인자를 입력해주세요. (0: Android, 1: iOS)"
    exit 1
fi

npm run build
cp -r dist/* cordova-app/www/

cd cordova-app

if [ $1 -eq 0 ]; then
    cordova run android
elif [ $1 -eq 1 ]; then
    ps -ef | grep -i simulator | awk '{print $2}' | xargs kill -9 2>/dev/null || true

    cordova run ios --target="iPhone-16-Pro"
else
    echo "올바른 인자를 입력해주세요. (0: Android, 1: iOS)"
    exit 1
fi

cd ..
