---
title: NetlifyとGatsbyでわずか１時間ぐらいでうっかり爆速blogを作ってしまって公開までしちゃった話
date: "2018-10-17T00:00:00.000Z"
---

## はじめに

もともとsakuraのVPS上に構築していたサイトで、wordpressを[別の場所](http://blog.nonsensecorner.com/) に移動させたあとの[この場所](https://www.nonsensecorner.com/)の再利用方法を模索していたけど今回作ってみたので晒す。

## 要件

いろいろ悩んだのは条件として、

- 家の環境に負荷がかからない
- DBとかの管理の手間がない
- 高速
- 無料

というところにこだわった（くせに真面目に調べようとすらしなかった）から。

## 調べたけどしなかったもの。

検討してやらなかったのは例えば以下のようなもの。

### 自宅鯖

実際問題としてすでにNASを運用してWeechatなどに利用しているので結果的にはそれに相乗り、と言う話でいいのだが、Wordpressなどは結構重いし、メモリは限られているので却下。
ソリューションを変えるのも手だが、実は手元のNAS向けに最新のnodejsのバイナリがなかったりと、面倒であった。
追加でPi3なりTinkerboardなりを用意する事は考えたが、追加の出費なので避けた。

### GCPの無料インスタンスでWordpress

次に考えたのがGCPの北米向け無料インスタンスで、これは今運用しているものがある。この上になにか、というのを考えて

[【第1回】GCPの無料枠でdev.toなみの爆速WordPress環境を構築する（爆速は正義）](https://www.karelie.net/free-fast-wordpress-site/)

にある方法で運用を試みたがメモリが少ない上に細かいところで手間取ったので放置してあった。あと、別にWordpressの運用をしたいわけではないので別サイトへの切り替えもしてみたい、とは思った。

### github pages

無料サイトで良ければgithub pagesでいいじゃんか、と言う話があってやってみようと思って調べていたが、面倒であまり調べていなかった。
あと、なにか

### GCPの無料インスタンス上でなにか

とりあえずWordpressはおいたままでなにか別のソリューションを、と考えていて、static site generatorも調べていた。今回、GCP上に開発環境でも作って様子を見ようか、と思っていたところ操作ミスで全部終わってしまった。

## 使った技術、やったこと

- [Gatsby](https://www.gatsbyjs.org/)
- [Netlify](https://www.netlify.com/)

Gatsbyはもともと狙っていたstatic site generatorで、Reactベースで爆速が売り。とはいえ純粋なCMSというよりは難解だが。これを使ってblogを実現するテンプレートもあるので、今回テストしてみよう、と思ったところ。

### 公開までの手順、あるいは過ちの記録

Gatsbyには[Starter](https://www.gatsbyjs.org/starters/)というのがあって、これは要するに簡単なテンプレートでサイトを作りやすくできるものである。今回選んだのは[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsby-starter-blog/?no-cache=1)というシンプルなblog。本来これを使うのは https://github.com/gatsbyjs/gatsby-starter-blog にあるようにgatsbyのサイトを作るわけなのだが、今回間違って"Try this starter Netlify" ボタンを押してしまったのが運の尽きである。

ボタンを押すとそのまま自分のgithubアカウントにforkされ、netlifyにアカウントを作られ、あれよあれよという間にすべて設定が終わってしまう。それどころがDNSのCNAMEを設定しろ、そしたら勝手にLet's encryptで証明書まで作ってくれるという。１時間というのの殆どはDNSの反映待ちである。

あとは細かい設定をしてbuildして、サンプルポストのページを消してこのポストをテストとして今書いている。公開が終わればとりあえずテスト完了といったところ。というかそもそもmarkdown形式を殆ど書いたことがないので、ソッチのほうがよほど冒険とも言える。

##おわりに

というわけで間違ってnetlifyを使ってしまったためにさっさと公開してしまった、という話。幸い個人運用に限って言えばNetlifyは無料なので、とりあえずしばらくおいておきたい。
内容がない、チュートリアルとしての体をなしていない文章だが、そもそもがこのサイトのテストなのでご容赦いただきたい。興味がある人がいればもうちょっと詳細を書くかもしれないが、詳細を書かないとわからない人はたぶんgatsbyを使うには向いてないと思う。

##興味を持った人に参考にしてほしい文献

なお、作業完了してから調べたサイトなので、これらを読んで作ってはいない。

- [ブログをGatsbyJS + Contentful + Netlifyで作り直したので今日はGatsby記念日](https://blog.unresolved.xyz/getting-started-gatsby-js-with-contentful-on-netlify/)
- https://speakerdeck.com/mottox2/create-fast-site-with-netlify-and-gatsby


