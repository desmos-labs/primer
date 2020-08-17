(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{453:function(s,t,a){"use strict";a.r(t);var e=a(53),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"desmos-primer-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#desmos-primer-setup"}},[s._v("#")]),s._v(" Desmos Primer Setup")]),s._v(" "),a("p",[s._v("In order to complete the primer challenges, you have to go through a setup process to install the Desmos CLI and connect it to a full node to create your Desmos account. You will find a detailed description of how this can be done below.")]),s._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[s._v("#")]),s._v(" Contents")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#requirements"}},[s._v("Requirements")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#installing"}},[s._v("Installing")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#updating"}},[s._v("Updating")])])]),s._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[s._v("#")]),s._v(" Requirements")]),s._v(" "),a("p",[s._v("In order to properly install "),a("code",[s._v("desmoscli")]),s._v(" and "),a("code",[s._v("desmosd")]),s._v(" you need to satisfy the following requirements.")]),s._v(" "),a("h3",{attrs:{id:"_1-having-go-installed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-having-go-installed"}},[s._v("#")]),s._v(" 1. Having Go installed")]),s._v(" "),a("p",[s._v("As the Desmos binaries are compiled using Go, you are required to have it installed on your machine to properly build and execute them.")]),s._v(" "),a("p",[s._v("To verify your Go version you can run "),a("code",[s._v("go version")]),s._v(" inside a terminal window.\nThis should return something that looks like")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("go version go1.14.3 linux/amd64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("If you instead get a "),a("code",[s._v("go: command not found")]),s._v(", it means you do not have Go installed. In this case, you can get it by going through the setup process present at the following link: "),a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("Installing Go"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h3",{attrs:{id:"_2-having-git-installed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-having-git-installed"}},[s._v("#")]),s._v(" 2. Having Git installed")]),s._v(" "),a("p",[s._v("Git will be used to download the Desmos binaries source that will later be compiled. To verify if you have Git installed, try running "),a("code",[s._v("git version")]),s._v(" inside a terminal window.")]),s._v(" "),a("p",[s._v("If you get a "),a("code",[s._v("git: command not found")]),s._v(", it means you are missing it. In this case, you can get it here: "),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git Downloads"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h3",{attrs:{id:"_3-having-git-setup-with-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-having-git-setup-with-github"}},[s._v("#")]),s._v(" 3. Having Git setup with GitHub")]),s._v(" "),a("p",[s._v("This step is required to later create Pull Requests that will make sure you get the Primer rewards properly.")]),s._v(" "),a("p",[s._v("If you haven't setup your Git to properly connect to your GitHub account, you can do it following this procedure: "),a("a",{attrs:{href:"https://help.github.com/en/github/getting-started-with-github/set-up-git",target:"_blank",rel:"noopener noreferrer"}},[s._v("Set up Git"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[s._v("#")]),s._v(" Installing")]),s._v(" "),a("p",[s._v("Once all the requirements have been satisfied, you can setup your machine to start completing the challenges.")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("Use upgrade procedure to upgrade")]),s._v(" "),a("p",[s._v("The following allows you to install the Desmos binaries from scratch. If you already have either "),a("code",[s._v("desmosd")]),s._v(" or "),a("code",[s._v("desmoscli")]),s._v(" installed, please make sure you follow the "),a("a",{attrs:{href:"#updating"}},[s._v("update guide")]),s._v(" instead. To verify if you have either one of those commands, try running the following inside a terminal windows:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("desmoscli version \ndesmosd version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("If you see an output that's different from "),a("code",[s._v("desmosXXX: command not found")]),s._v(", it means you already have them installed.")])]),s._v(" "),a("h3",{attrs:{id:"_1-making-sure-go-is-installed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-making-sure-go-is-installed"}},[s._v("#")]),s._v(" 1. Making sure Go is installed")]),s._v(" "),a("p",[s._v("Execute the following command:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("go version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("The output should look like")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("go version go1.13.5 linux/amd64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Go 1.13 or above is required")]),s._v(" "),a("p",[s._v("To continue make sure the version or your Go executable is "),a("code",[s._v("1.13")]),s._v(" or later.")])]),s._v(" "),a("p",[s._v("Once you have properly installed Go, we need to make sure the necessary environmental variables are properly setup. To do so, execute:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export GOPATH=\""),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/go\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export GOBIN=\""),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=\""),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOBIN")]),s._v("\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("To make sure everything is all right, try executing:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOBIN")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("This should return something like")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/home/<user>/go/bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("If it returns an empty string, make sure you execute the above commands properly.")]),s._v(" "),a("h3",{attrs:{id:"_2-installing-the-desmos-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-installing-the-desmos-cli"}},[s._v("#")]),s._v(" 2. Installing the Desmos CLI")]),s._v(" "),a("p",[s._v("The Desmos Command Line Interface (in short, "),a("em",[s._v("CLI")]),s._v(") is the tool that allows you to perform Desmos-related operations using a terminal on your machine. It connects to a full node of the Desmos Chain allowing you to easily create, sign and send transactions to it.")]),s._v(" "),a("p",[s._v("In order to install it, please execute the following commands:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/desmos-labs/desmos.git "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/github.com/desmos-labs/desmos\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/github.com/desmos-labs/desmos\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --tags\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout tags/v0.5.1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Once all the above commands have completed successfully, you should be able to execute the following command:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli version --long\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("The result should be:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("name: Desmos\nserver_name: desmosd\nclient_name: desmoscli\nversion: 0.5.1\ncommit: fba4226f61b0a2224c013362fb41d65bd3b663a9\nbuild_tags: netgo ledger\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_3-connecting-the-cli-to-a-full-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-connecting-the-cli-to-a-full-node"}},[s._v("#")]),s._v(" 3. Connecting the CLI to a full node")]),s._v(" "),a("p",[s._v("Once the CLI has been properly installed, to allow it reading from and writing to the chain state, we need to connect it to our public full node. To do so, please run:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli config node http://54.180.98.75:26657\ndesmoscli config chain-id morpheus-4001\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("The result should look something like")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("configuration saved to .desmoscli/config/config.toml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("To make sure everything is done properly, try running:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli query block "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("The output should be")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"block_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6933BC56CD668CB5D2EC1286B526A0C4B589D9A92E88B9CCA126CD054E2BE143"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"parts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"total"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"64588C7720205762808AD2E17E1113F0B82271B3CC4AB04D02E4EAC25AB097E8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"block"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"header"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"block"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"app"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"chain_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"morpheus-4001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"height"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-05-20T10:00:00Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"last_block_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"parts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"total"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"last_commit_hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data_hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"validators_hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7DAEA6F3C195EC289778EC868998FB82A6CB5B6BFDAC67482AFCBD69AEA9B155"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"next_validators_hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7DAEA6F3C195EC289778EC868998FB82A6CB5B6BFDAC67482AFCBD69AEA9B155"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"consensus_hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"app_hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"last_results_hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"evidence_hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"proposer_address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D986DA6092404D46251F58DBC480AE05493763C5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"txs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"evidence"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"evidence"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"last_commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"height"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"round"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"block_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"parts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"total"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"signatures"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-creating-your-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-creating-your-address"}},[s._v("#")]),s._v(" 4. Creating your address")]),s._v(" "),a("p",[s._v("In order to perform operations on the Desmos Chain, you will need a Desmos address. These are unique random-generated accounts based on 24 words-long mnemonic phrases.")]),s._v(" "),a("p",[s._v("In order to generate a new address, run the following commands:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli keys "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# E.g. desmosli keys add jack  ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("After typing a password and the confirmation, the result should look like the following:")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jack\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" local\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" desmos1uht7hsl88wr002ses4qf5k24nshdyxukv3r2p8\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pubkey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" desmospub1addwnpepqvwf7qcdv97prfwv6cp20c5pgre4j8ln9y0tqygj4ut36xndd9srkrxhk3e\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mnemonic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("threshold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pubkeys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("**Important**")]),s._v(" write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nconduct never unit tobacco song hurt pepper silk hundred merit cheese bulb electric wink swarm auto rule afford taxi lounge local bundle trouble kitten\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("Make sure you have written somewhere safe the mnemonic phrase that is returned to you as this will be the only way to later recover the account if you need to do so. Loosing this phrase means loosing access to all your funds.")])]),s._v(" "),a("h3",{attrs:{id:"_5-receive-some-upotin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-receive-some-upotin"}},[s._v("#")]),s._v(" 5. Receive some "),a("code",[s._v("upotin")])]),s._v(" "),a("p",[s._v("Inside our testnets the tokens will be:")]),s._v(" "),a("ul",[a("li",[s._v("Daric (namely "),a("code",[s._v("udaric")]),s._v(") as the staking token")]),s._v(" "),a("li",[s._v("Potin (namely "),a("code",[s._v("upotin")]),s._v(") as the fee token")])]),s._v(" "),a("p",[s._v("You need some fund to fully activate your account, visit our "),a("a",{attrs:{href:"https://faucet.desmos.network",target:"_blank",rel:"noopener noreferrer"}},[s._v("faucet page"),a("OutboundLink")],1),s._v(" and request some "),a("code",[s._v("upotin")]),s._v(" by inserting your address. If you forget the address you have just generated, you can get it by running")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli keys show "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-key-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --address\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# desmoscli keys show jack --address ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("This will return the associated address such as")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("desmos1gmu4uevcvwfcuu43yp27gcv4ngxuh9sxfpv3er\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("You will receive some tokens after you put it into the faucet.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Welcome!")]),s._v(" "),a("p",[s._v("Congratulations, you have setup your Desmos account successfully! You can now start the "),a("a",{attrs:{href:"https://primer.desmos.network/phase-1/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Phase 1 challenges"),a("OutboundLink")],1),s._v(" and earn some Desmos Tokens!")])]),s._v(" "),a("h2",{attrs:{id:"updating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating"}},[s._v("#")]),s._v(" Updating")]),s._v(" "),a("p",[s._v("If you have already installed the Desmos binaries in the past and you want to update them to the latest version, you can execute the following set of commands:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/github.com/desmos-labs/desmos\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --all "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout tags/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" describe --tags `git rev-list --tags --max-count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("`"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Upon updating, try running the following command:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmoscli version --long\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("This should return the current version information, which should something like be:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("name: Desmos\nserver_name: desmosd\nclient_name: desmoscli\nversion: 0.5.1\ncommit: fba4226f61b0a2224c013362fb41d65bd3b663a9\nbuild_tags: netgo ledger\ngo: go version go1.13.5 linux/amd64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);