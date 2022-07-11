# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
echo 'www.milkcxb.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:MilkCXB/milkcxb.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com/MilkCXB/milk-blog-v2.git master:gh-pages
git push -f https://github.com/MilkCXB/milk-blog-v2.git master:gh-pages
# git push -f https://github.com/MilkCXB/milkcxb.github.io.git master


cd -

