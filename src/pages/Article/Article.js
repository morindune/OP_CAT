// Article.js
import React from 'react';
import styles from './Article.module.css';

const Article = () => {
  return (
    <div className={styles.container}>
    
    <h1 className={styles.title}>Satoshi's favorite pet.</h1>
    <div className={styles.description}>
      <p>
        Satoshi's favorite pet. You have probably seen everyone talking about cats, or OP_CAT, in the bitcoin scene. But what is it and why should we, as users, even care about OP_CAT? OP_CAT was a simple but very powerful function in bitcoin’s scripting language which was removed because it had some unintentional use cases that could have caused issues for the network. However, removing this function also drastically limited bitcoin’s scripting capabilities, making it difficult to build more complex use cases on bitcoin.
      </p>
      <p>
        While one camp argues that bitcoins use cases should be limited to transferring money in a trustless and decentralized way, whereas another part of the community argues that it would be desirable to have more expressive scripting capabilities in bitcoin. The reason for this is that the limited functionality of bitcoin hinders adoption, because it makes the process of creating many useful applications and scaling solutions for bitcoin very cumbersome or simply impossible.
      </p>
      <p>
        This has led many developers to find ways to mitigate these limitations by using more expressive blockchains to build applications, letting users "move" their bitcoins over to other chains if they wish to make use of these features. These are often referred to as bitcoin roll-ups or sidechains, but all of them have different security trade-offs compared to the bitcoin main chain. Apart from the security trade-offs of those roll-ups and sidechains, the process of moving bitcoin over to another chain in a secure and decentralized way comes with its own pitfalls. While inventions like BitVM would improve this process, OP_CAT would remove many of the remaining issues.
      </p>
      <h2>Good kitty - Bad kitty</h2>
      <h3>Good kitty</h3>
      <p>
        As mentioned, most of the arguments in favor of reviving OP_CAT ultimately come down to allowing more expressive scripting and scaling capabilities for bitcoin. While the list of potential new features is long, some of the most important and promising would be:
      </p>
      <ul>
        <li>Drivechains: A special type of sidechain that would inherit better security from bitcoin mainnet than other roll-ups currently do. The great thing about this is that it is an opt-in feature. Meaning users can decide if they want to use the sidechain or rather leave their coins on the main chain. It is worth noting though, that this feature could also be activated without OP_CAT, via BIPs (Bitcoin Improvement Proposals) 300+301 that are specifically designed to enable drivechains without opening up a broad application space as OP_CAT does.</li>
        <li>Quantum proof signatures: This would theoretically ensure that even quantum computers could not 'guess' someone's private key to steal their coins. However, this does not seem to be practical as of now and could also be implemented using a different, currently not activated, opcode.</li>
        <li>Covenants: This would allow programming conditions in bitcoin, such as spending conditions or vaults, to better secure user funds. While there is a separate BIP 119, which would add OP_CHECKTEMPLATEVERIFY (CTV), which would allow covenants, OP_CAT could also enable the use of ‘simple covenants and other advanced contracts.</li>
        <li>Bitstream: Is a decentralized file hosting system paid in bitcoin. Although it is already possible to build this on bitcoin, the complexity and costs make the usage impractical. OP_CAT would introduce changes that make such protocols far more practical.</li>
      </ul>
      <h3>Bad kitty</h3>
      <p>
        At this point you may ask yourself, if OP_CAT is such a powerful function that allows to build so many interesting features on top of bitcoin, 'why would anyone be against it'? Just as there are multiple reasonable arguments for OP_CAT, there are also several reasonable arguments against it.
      </p>
      <p>
        Technical Risk: Probably the most common and most serious concern is the extremely broad application spectrum that comes with OP_CAT. While it is great that only adding one opcode enables so many different applications, this is not a desirable trait from a security perspective, because that makes it very difficult to sufficiently identify all possible weak points or bugs that could be exploited at some point in the future. Although even a small code change might introduce a bug or create opportunities for exploits, more narrowly defined opcodes are easier to test and analyze. But it is not only about the unknowns OP_CAT would introduce but also about the known applications that OP_CAT would enable, which have to be thoroughly analyzed about their potential risks.
      </p>
      <p>
        Economical Risk: The second popular argument against OP_CAT is that it enables drivechains. Now you may scratch your head again because, as just explained, drivechains are considered to be a great way to improve and scale bitcoin by many supporters. One of the fundamental pillars of bitcoin is the relationship between users and miners, and the incentives for miners to secure the network. They do so by including the users transactions without censoring or cheating on them. For this service users pay miners via the transaction fee and the newly minted coins of a block (aka inflation). Drivechains, which are also secured by the miners, introduce a new variable to this economic incentive design because they are, all of a sudden, securing two different chains. Although actual implications are largely unknown and can only be modeled based on various assumptions, the fear is that miners might now have an incentive to censor transactions on the main chain or the drivechain to increase the fees they get for mining the block.
      </p>
      <h2>Conclusion</h2>
      <p>
        This article is purposely written as objectively as possible and will leave the conclusion to the reader. Based on all the arguments, do you think we should revive Satoshi's favorite pet back to life, let it rest in peace or remain in its current quantum state of uncertainty?
      </p>
      <p>
        As a final remark, with every update to the codebase, we have to consider what is at risk. Currently, the market cap is roughly 815 billion USD, which could be wiped out if the new code contains bugs or opens up attack vectors that malicious actors could exploit or simply because miner incentives become too distorted, such that they no longer align with users. Hence, regardless of which BIP would be merged to the current code base, everyone involved in bitcoin has the obligation to evaluate the benefits of the proposal against the risk AND against the consequences, if said risks materialize.
      </p>
      <p>
        But what can each of us do to influence which proposal should be included in the next code update or if the suggested code update should be implemented in the first place? How do we even come to a mutual agreement on that, given that there is no governance mechanism and miners and users are often anonymous and scattered around the whole world? Don’t worry, we got you covered with another article [insert link here].
      </p>
      <h3>References and sources:</h3>
    <a href="https://github.com/EthanHeilman/op_cat_draft/blob/main/cat.mediawiki" target="_blank" className={styles.referenceLink} rel="noreferrer">
      https://github.com/EthanHeilman/op_cat_draft/blob/main/cat.mediawiki  
    </a>
    <a href="https://www.bitstamp.net/learn/crypto-101/what-was-the-blocksize-war/" target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://www.bitstamp.net/learn/crypto-101/what-was-the-blocksize-war/ 
    </a>
    <a href="https://www.bitcoinrollups.io/the-basics " target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://www.bitcoinrollups.io/the-basics 
    </a>
    <a href="https://t.me/bitVM_chat/4807" target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://t.me/bitVM_chat/4807
    </a>
    <a href="https://t.me/bitVM_chat/9612" target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://t.me/bitVM_chat/9612
    </a>
    <a href="https://www.drivechain.info/" target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://www.drivechain.info/
    </a>
    <a href="https://twitter.com/Polyd_/status/1747585924207092052?s=20" target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://twitter.com/Polyd_/status/1747585924207092052?s=20
    </a>
    <a href="https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2021-July/019233.html" target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2021-July/019233.html
    </a>
    <a href="https://bitcoinops.org/en/topics/op_checktemplateverify/" target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://bitcoinops.org/en/topics/op_checktemplateverify/
    </a>
    <a href="https://github.com/EthanHeilman/op_cat_draft/blob/main/cat.mediawiki" target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://github.com/EthanHeilman/op_cat_draft/blob/main/cat.mediawiki
    </a>
    <a href="https://robinlinus.com/bitstream.pdf" target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://robinlinus.com/bitstream.pdf
    </a>
    <a href="https://bitcoinmagazine.com/technical/everyones-thinking-about-second-layers-is-backwards-" target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://bitcoinmagazine.com/technical/everyones-thinking-about-second-layers-is-backwards-
    </a>
    <a href="https://www.coingecko.com/en/coins/bitcoin" target="_blank" className={styles.referenceLink} rel="noreferrer">
    https://www.coingecko.com/en/coins/bitcoin
    </a>
    </div>
    
    
  </div>
);
};



export default Article;
