



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>orion.client/Deferred.js at master · eclipse/orion.client · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="eclipse/orion.client" name="twitter:title" /><meta content="e4 project repository (orion.client)" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/56974?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/56974?v=3&amp;s=400" property="og:image" /><meta content="eclipse/orion.client" property="og:title" /><meta content="https://github.com/eclipse/orion.client" property="og:url" /><meta content="e4 project repository (orion.client)" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="C6291EE7:35CB:3AA10FA9:568E21B5" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="741fe0b7167c224f4d64fd88f0a81600af3cf589" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-5ccfffb27ecb48e213b8582952578f145ffded2d5c7e090e9d9b98e7a9f7e4d2.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-bfa4d26fd36d7a0dcd2ae2d9fdc7f00efade56f7feb7655898f6918f4ae949e9.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="2302ce94cd22b012a1d3b8852afd9dd6">

      
  <meta name="description" content="e4 project repository (orion.client)">
  <meta name="go-import" content="github.com/eclipse/orion.client git https://github.com/eclipse/orion.client.git">

  <meta content="56974" name="octolytics-dimension-user_id" /><meta content="eclipse" name="octolytics-dimension-user_login" /><meta content="1553753" name="octolytics-dimension-repository_id" /><meta content="eclipse/orion.client" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1553753" name="octolytics-dimension-repository_network_root_id" /><meta content="eclipse/orion.client" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/eclipse/orion.client/commits/master.atom" rel="alternate" title="Recent Commits to orion.client:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production  vis-public mirror  page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Feclipse%2Forion.client%2Fblob%2Fmaster%2Fbundles%2Forg.eclipse.orion.client.core%2Fweb%2Forion%2FDeferred.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/eclipse/orion.client/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/eclipse/orion.client/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Feclipse%2Forion.client"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/eclipse/orion.client/watchers">
    87
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Feclipse%2Forion.client"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star "></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/eclipse/orion.client/stargazers">
      604
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Feclipse%2Forion.client"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked "></span>
        Fork
      </a>

    <a href="/eclipse/orion.client/network" class="social-count">
      293
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public repo-mirror">
  <span class="octicon octicon-mirror "></span>
  <span class="author"><a href="/eclipse" class="url fn" itemprop="url" rel="author"><span itemprop="title">eclipse</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/eclipse/orion.client" data-pjax="#js-repo-pjax-container">orion.client</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

    <span class="mirror-flag">
      <span class="text">mirrored from <a href="git://git.eclipse.org/gitroot/orion/org.eclipse.orion.client.git">git://git.eclipse.org/gitroot/orion/org.eclipse.orion.client.git</a></span>
    </span>
</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/eclipse/orion.client" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /eclipse/orion.client">
    <span class="octicon octicon-code "></span>
    Code
</a>

  <a href="/eclipse/orion.client/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /eclipse/orion.client/pulls">
    <span class="octicon octicon-git-pull-request "></span>
    Pull requests
    <span class="counter">2</span>
</a>

  <a href="/eclipse/orion.client/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /eclipse/orion.client/pulse">
    <span class="octicon octicon-pulse "></span>
    Pulse
</a>
  <a href="/eclipse/orion.client/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /eclipse/orion.client/graphs">
    <span class="octicon octicon-graph "></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/eclipse/orion.client/blob/10495b1c8292db02e0a45126fe920ab10156dde2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:f515da9a40e942aba264597ec7d58c20 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/0.2M7/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="0.2M7"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="0.2M7">
                0.2M7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/4.0M1b_maintenance/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="4.0M1b_maintenance"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="4.0M1b_maintenance">
                4.0M1b_maintenance
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/4.0M2_maintenance/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="4.0M2_maintenance"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="4.0M2_maintenance">
                4.0M2_maintenance
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/5.0M2_safe_branch/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="5.0M2_safe_branch"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="5.0M2_safe_branch">
                5.0M2_safe_branch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/12/60212/1/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="12/60212/1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="12/60212/1">
                12/60212/1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/48/60148/1/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="48/60148/1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="48/60148/1">
                48/60148/1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/411211/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="411211"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="411211">
                411211
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/411598/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="411598"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="411598">
                411598
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug418796_Sections/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug418796_Sections"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug418796_Sections">
                Bug418796_Sections
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug419076/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug419076"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug419076">
                Bug419076
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug419376/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug419376"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug419376">
                Bug419376
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug419512/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug419512"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug419512">
                Bug419512
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug419516/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug419516"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug419516">
                Bug419516
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug419737/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug419737"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug419737">
                Bug419737
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug420370/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug420370"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug420370">
                Bug420370
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug423062/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug423062"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug423062">
                Bug423062
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug426974_cfPushUpdate/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug426974_cfPushUpdate"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug426974_cfPushUpdate">
                Bug426974_cfPushUpdate
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug427399/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug427399"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug427399">
                Bug427399
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug429201/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug429201"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug429201">
                Bug429201
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug441977/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug441977"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug441977">
                Bug441977
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/Bug443802/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="Bug443802"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Bug443802">
                Bug443802
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/R4.0RC3_maintenance/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="R4.0RC3_maintenance"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="R4.0RC3_maintenance">
                R4.0RC3_maintenance
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/R4.0_maintenance/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="R4.0_maintenance"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="R4.0_maintenance">
                R4.0_maintenance
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/R5.0M1_maintenance/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="R5.0M1_maintenance"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="R5.0M1_maintenance">
                R5.0M1_maintenance
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/R5.0RC2_maintenance/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="R5.0RC2_maintenance"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="R5.0RC2_maintenance">
                R5.0RC2_maintenance
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/R5.0_maintenance/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="R5.0_maintenance"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="R5.0_maintenance">
                R5.0_maintenance
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/R6.0M1/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="R6.0M1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="R6.0M1">
                R6.0M1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/TooltipLifeCycle/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="TooltipLifeCycle"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="TooltipLifeCycle">
                TooltipLifeCycle
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/UCOSPOrion/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="UCOSPOrion"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="UCOSPOrion">
                UCOSPOrion
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/UserInterface/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="UserInterface"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="UserInterface">
                UserInterface
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/ah-Bug420302/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="ah-Bug420302"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ah-Bug420302">
                ah-Bug420302
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/ah-Bug439732/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="ah-Bug439732"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ah-Bug439732">
                ah-Bug439732
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/aidanr/LandingPage/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="aidanr/LandingPage"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="aidanr/LandingPage">
                aidanr/LandingPage
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/aidanr/login_auth_work/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="aidanr/login_auth_work"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="aidanr/login_auth_work">
                aidanr/login_auth_work
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/async-shellPage/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="async-shellPage"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="async-shellPage">
                async-shellPage
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bogBranch/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bogBranch"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bogBranch">
                bogBranch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug359273/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug359273"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug359273">
                bug359273
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug407702/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug407702"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug407702">
                bug407702
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug419022/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug419022"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug419022">
                bug419022
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug419837/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug419837"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug419837">
                bug419837
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug428353/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug428353"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug428353">
                bug428353
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug430175b/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug430175b"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug430175b">
                bug430175b
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug430175/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug430175"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug430175">
                bug430175
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug431141/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug431141"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug431141">
                bug431141
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug431141_2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug431141_2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug431141_2">
                bug431141_2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug446669/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug446669"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug446669">
                bug446669
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug448140/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug448140"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug448140">
                bug448140
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/bug450837/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="bug450837"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug450837">
                bug450837
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/buildfix/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="buildfix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="buildfix">
                buildfix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/change/52266/3/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="change/52266/3"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="change/52266/3">
                change/52266/3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/codemirror/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="codemirror"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="codemirror">
                codemirror
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/compare_tests/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="compare_tests"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="compare_tests">
                compare_tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/completion-overwrite/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="completion-overwrite"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="completion-overwrite">
                completion-overwrite
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/config/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="config"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="config">
                config
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/confirmDialog/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="confirmDialog"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="confirmDialog">
                confirmDialog
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/contextmenu_temp2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="contextmenu_temp2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="contextmenu_temp2">
                contextmenu_temp2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/cwindatt/Bug443507_GoIntoProjectNav/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="cwindatt/Bug443507_GoIntoProjectNav"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cwindatt/Bug443507_GoIntoProjectNav">
                cwindatt/Bug443507_GoIntoProjectNav
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/cwindatt/Bug465610_ProgressTernContentAssist/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="cwindatt/Bug465610_ProgressTernContentAssist"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cwindatt/Bug465610_ProgressTernContentAssist">
                cwindatt/Bug465610_ProgressTernContentAssist
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/cwindatt/Bug469939_WrongLineComments/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="cwindatt/Bug469939_WrongLineComments"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cwindatt/Bug469939_WrongLineComments">
                cwindatt/Bug469939_WrongLineComments
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/cwindatt/Bug472874_StyleContentAssist/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="cwindatt/Bug472874_StyleContentAssist"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cwindatt/Bug472874_StyleContentAssist">
                cwindatt/Bug472874_StyleContentAssist
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/devTest/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="devTest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="devTest">
                devTest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/dialog_titles/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="dialog_titles"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="dialog_titles">
                dialog_titles
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/doctrine-support/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="doctrine-support"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="doctrine-support">
                doctrine-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/dojo_150/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="dojo_150"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="dojo_150">
                dojo_150
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/dojo_160/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="dojo_160"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="dojo_160">
                dojo_160
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/dojo_161/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="dojo_161"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="dojo_161">
                dojo_161
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/ece-get-plugins/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="ece-get-plugins"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ece-get-plugins">
                ece-get-plugins
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/editorCommands_tests/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="editorCommands_tests"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="editorCommands_tests">
                editorCommands_tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/editorWrapping/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="editorWrapping"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="editorWrapping">
                editorWrapping
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/elijahe_bug432953/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="elijahe_bug432953"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="elijahe_bug432953">
                elijahe_bug432953
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/EditBindings/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/EditBindings"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/EditBindings">
                emoffatt/EditBindings
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/EditorContextMenu/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/EditorContextMenu"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/EditorContextMenu">
                emoffatt/EditorContextMenu
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/EditorOpenMode/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/EditorOpenMode"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/EditorOpenMode">
                emoffatt/EditorOpenMode
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/Express/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/Express"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/Express">
                emoffatt/Express
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/FixCancel/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/FixCancel"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/FixCancel">
                emoffatt/FixCancel
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/GoodBindingEdit/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/GoodBindingEdit"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/GoodBindingEdit">
                emoffatt/GoodBindingEdit
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/HeaderSearch/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/HeaderSearch"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/HeaderSearch">
                emoffatt/HeaderSearch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/ProjectSearch/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/ProjectSearch"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/ProjectSearch">
                emoffatt/ProjectSearch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/ScriptResolverFix/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/ScriptResolverFix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/ScriptResolverFix">
                emoffatt/ScriptResolverFix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/SplitEditors/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/SplitEditors"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/SplitEditors">
                emoffatt/SplitEditors
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/UpdatedHeaderSearch/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/UpdatedHeaderSearch"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/UpdatedHeaderSearch">
                emoffatt/UpdatedHeaderSearch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/emoffatt/tipLayout/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="emoffatt/tipLayout"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emoffatt/tipLayout">
                emoffatt/tipLayout
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/eslint_arrow/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="eslint_arrow"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="eslint_arrow">
                eslint_arrow
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/eslint0.6.2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="eslint0.6.2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="eslint0.6.2">
                eslint0.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/eslint0_15_1/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="eslint0_15_1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="eslint0_15_1">
                eslint0_15_1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/esprima_refresh/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="esprima_refresh"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="esprima_refresh">
                esprima_refresh
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/esprima_tolerant/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="esprima_tolerant"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="esprima_tolerant">
                esprima_tolerant
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/esprima_tolerant2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="esprima_tolerant2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="esprima_tolerant2">
                esprima_tolerant2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/esprima_tolerant3/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="esprima_tolerant3"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="esprima_tolerant3">
                esprima_tolerant3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/esprima2_0/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="esprima2_0"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="esprima2_0">
                esprima2_0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/esprima2_0_0/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="esprima2_0_0"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="esprima2_0_0">
                esprima2_0_0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/evan/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="evan"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="evan">
                evan
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/findFileButton/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="findFileButton"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="findFileButton">
                findFileButton
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/fixNavigatorFlash/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="fixNavigatorFlash"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fixNavigatorFlash">
                fixNavigatorFlash
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/ggayed/Bug459264/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="ggayed/Bug459264"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ggayed/Bug459264">
                ggayed/Bug459264
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/ggayed/markdownEditor/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="ggayed/markdownEditor"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ggayed/markdownEditor">
                ggayed/markdownEditor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/ggayed/yamlFrontMatter/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="ggayed/yamlFrontMatter"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ggayed/yamlFrontMatter">
                ggayed/yamlFrontMatter
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/ggayedTestBranch/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="ggayedTestBranch"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ggayedTestBranch">
                ggayedTestBranch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/Test1/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/Test1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/Test1">
                gheorghe/Test1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/blameRefactor/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/blameRefactor"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/blameRefactor">
                gheorghe/blameRefactor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/defTreeUpdate/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/defTreeUpdate"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/defTreeUpdate">
                gheorghe/defTreeUpdate
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/fileSelect/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/fileSelect"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/fileSelect">
                gheorghe/fileSelect
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/gitComponents_gitStatusExplorer/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/gitComponents_gitStatusExplorer"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/gitComponents_gitStatusExplorer">
                gheorghe/gitComponents_gitStatusExplorer
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/gitComponents/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/gitComponents"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/gitComponents">
                gheorghe/gitComponents
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/gitComponentsSquashed/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/gitComponentsSquashed"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/gitComponentsSquashed">
                gheorghe/gitComponentsSquashed
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/gitDoc/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/gitDoc"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/gitDoc">
                gheorghe/gitDoc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/gitRepository2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/gitRepository2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/gitRepository2">
                gheorghe/gitRepository2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/gitStandaloneIFrame/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/gitStandaloneIFrame"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/gitStandaloneIFrame">
                gheorghe/gitStandaloneIFrame
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/gitStatus2Squash/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/gitStatus2Squash"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/gitStatus2Squash">
                gheorghe/gitStatus2Squash
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/gitStatus2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/gitStatus2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/gitStatus2">
                gheorghe/gitStatus2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/printMargin/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/printMargin"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/printMargin">
                gheorghe/printMargin
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/rbTest/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/rbTest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/rbTest">
                gheorghe/rbTest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gheorghe/testBranchAutoFetch2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gheorghe/testBranchAutoFetch2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gheorghe/testBranchAutoFetch2">
                gheorghe/testBranchAutoFetch2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/ghoerghe/AnotherTest/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="ghoerghe/AnotherTest"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ghoerghe/AnotherTest">
                ghoerghe/AnotherTest
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/gitTest3/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="gitTest3"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gitTest3">
                gitTest3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/htmlcontentas/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="htmlcontentas"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="htmlcontentas">
                htmlcontentas
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/htmlparser2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="htmlparser2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="htmlparser2">
                htmlparser2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/inlineSearch/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="inlineSearch"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="inlineSearch">
                inlineSearch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/inlineSearch2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="inlineSearch2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="inlineSearch2">
                inlineSearch2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/integrations_sb/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="integrations_sb"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="integrations_sb">
                integrations_sb
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/johna/ftpFileService/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="johna/ftpFileService"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="johna/ftpFileService">
                johna/ftpFileService
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/json/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="json"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="json">
                json
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/landingpage/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="landingpage"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="landingpage">
                landingpage
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/launcher_cfo/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="launcher_cfo"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="launcher_cfo">
                launcher_cfo
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/launcher_dav/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="launcher_dav"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="launcher_dav">
                launcher_dav
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/liwang/OrionTVT10/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="liwang/OrionTVT10"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="liwang/OrionTVT10">
                liwang/OrionTVT10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/liwang/bidiBugs/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="liwang/bidiBugs"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="liwang/bidiBugs">
                liwang/bidiBugs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/liwang/bug473857/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="liwang/bug473857"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="liwang/bug473857">
                liwang/bug473857
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/liwang/gitCommitBrowser/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="liwang/gitCommitBrowser"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="liwang/gitCommitBrowser">
                liwang/gitCommitBrowser
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/liwang/newNls_bug454607/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="liwang/newNls_bug454607"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="liwang/newNls_bug454607">
                liwang/newNls_bug454607
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/liwang/nlsSupportNew2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="liwang/nlsSupportNew2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="liwang/nlsSupportNew2">
                liwang/nlsSupportNew2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/loader/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="loader"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="loader">
                loader
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/mamacdon/htmlcontentas/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="mamacdon/htmlcontentas"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mamacdon/htmlcontentas">
                mamacdon/htmlcontentas
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/mamacdon/temp/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="mamacdon/temp"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mamacdon/temp">
                mamacdon/temp
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/mark/plugin_maker/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="mark/plugin_maker"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mark/plugin_maker">
                mark/plugin_maker
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/markdown_highlight/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="markdown_highlight"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="markdown_highlight">
                markdown_highlight
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/eclipse/orion.client/blob/master/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/mmacdonald/eslint_arrow/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="mmacdonald/eslint_arrow"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mmacdonald/eslint_arrow">
                mmacdonald/eslint_arrow
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/mmacdonald/gerrit_test/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="mmacdonald/gerrit_test"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mmacdonald/gerrit_test">
                mmacdonald/gerrit_test
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/mmacdonald/project_hack/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="mmacdonald/project_hack"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mmacdonald/project_hack">
                mmacdonald/project_hack
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/mmacdonald/rjs/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="mmacdonald/rjs"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mmacdonald/rjs">
                mmacdonald/rjs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/move_to_chai/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="move_to_chai"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="move_to_chai">
                move_to_chai
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/mrennie/acorn_parser/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="mrennie/acorn_parser"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mrennie/acorn_parser">
                mrennie/acorn_parser
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/mrennie/jsplugin-worker/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="mrennie/jsplugin-worker"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mrennie/jsplugin-worker">
                mrennie/jsplugin-worker
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/newBranch/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="newBranch"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="newBranch">
                newBranch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/newBranch3/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="newBranch3"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="newBranch3">
                newBranch3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/node_0_0_36/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="node_0_0_36"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="node_0_0_36">
                node_0_0_36
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/orion-chrome-app/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="orion-chrome-app"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="orion-chrome-app">
                orion-chrome-app
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/plugin_loading_2014/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="plugin_loading_2014"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="plugin_loading_2014">
                plugin_loading_2014
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/plugin_loading_2014_2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="plugin_loading_2014_2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="plugin_loading_2014_2">
                plugin_loading_2014_2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/projectsExternalizeStrings/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="projectsExternalizeStrings"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="projectsExternalizeStrings">
                projectsExternalizeStrings
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/pwebster/bug458883/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="pwebster/bug458883"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="pwebster/bug458883">
                pwebster/bug458883
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/pwebster/bug458884/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="pwebster/bug458884"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="pwebster/bug458884">
                pwebster/bug458884
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/pwebster/bug479516/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="pwebster/bug479516"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="pwebster/bug479516">
                pwebster/bug479516
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/pwebster/bug483949/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="pwebster/bug483949"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="pwebster/bug483949">
                pwebster/bug483949
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/pwebster/bugWhatnot/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="pwebster/bugWhatnot"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="pwebster/bugWhatnot">
                pwebster/bugWhatnot
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/sauce/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="sauce"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="sauce">
                sauce
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/saucefix/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="saucefix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="saucefix">
                saucefix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/searchInEditor/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="searchInEditor"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="searchInEditor">
                searchInEditor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/searchMultipleFolders/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="searchMultipleFolders"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="searchMultipleFolders">
                searchMultipleFolders
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/searchScope/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="searchScope"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="searchScope">
                searchScope
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/searchUI_components/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="searchUI_components"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="searchUI_components">
                searchUI_components
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/searchUI/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="searchUI"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="searchUI">
                searchUI
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/searchUIScope/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="searchUIScope"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="searchUIScope">
                searchUIScope
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/Bug417554/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/Bug417554"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/Bug417554">
                silenio/Bug417554
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/addSidebarParam/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/addSidebarParam"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/addSidebarParam">
                silenio/addSidebarParam
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/bug426472/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/bug426472"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/bug426472">
                silenio/bug426472
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/bug428001/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/bug428001"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/bug428001">
                silenio/bug428001
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/bug428443/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/bug428443"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/bug428443">
                silenio/bug428443
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/bug428443_1/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/bug428443_1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/bug428443_1">
                silenio/bug428443_1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/bug428496/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/bug428496"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/bug428496">
                silenio/bug428496
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/bug433967/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/bug433967"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/bug433967">
                silenio/bug433967
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/commandsWork/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/commandsWork"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/commandsWork">
                silenio/commandsWork
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/fileClientService/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/fileClientService"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/fileClientService">
                silenio/fileClientService
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/gitCommit_testing/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/gitCommit_testing"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/gitCommit_testing">
                silenio/gitCommit_testing
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/gitFileClient/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/gitFileClient"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/gitFileClient">
                silenio/gitFileClient
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/gitLogInline1/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/gitLogInline1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/gitLogInline1">
                silenio/gitLogInline1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/gitLogInline2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/gitLogInline2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/gitLogInline2">
                silenio/gitLogInline2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/gitSelection/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/gitSelection"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/gitSelection">
                silenio/gitSelection
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/gitStatus_testing/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/gitStatus_testing"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/gitStatus_testing">
                silenio/gitStatus_testing
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/gitWork/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/gitWork"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/gitWork">
                silenio/gitWork
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/longLines/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/longLines"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/longLines">
                silenio/longLines
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/multiSelection/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/multiSelection"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/multiSelection">
                silenio/multiSelection
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/multiSelection1/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/multiSelection1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/multiSelection1">
                silenio/multiSelection1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/pluginFixes/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/pluginFixes"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/pluginFixes">
                silenio/pluginFixes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/pluginServicesAccess/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/pluginServicesAccess"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/pluginServicesAccess">
                silenio/pluginServicesAccess
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/prefsChanges/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/prefsChanges"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/prefsChanges">
                silenio/prefsChanges
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/removeBanner/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/removeBanner"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/removeBanner">
                silenio/removeBanner
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/templateWork/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/templateWork"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/templateWork">
                silenio/templateWork
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/testPush1/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/testPush1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/testPush1">
                silenio/testPush1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/silenio/udpateCFplugins/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="silenio/udpateCFplugins"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="silenio/udpateCFplugins">
                silenio/udpateCFplugins
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable">
                stable
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140409/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140409"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140409">
                stable_20140409
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140414/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140414"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140414">
                stable_20140414
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140417/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140417"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140417">
                stable_20140417
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140422/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140422"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140422">
                stable_20140422
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140514/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140514"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140514">
                stable_20140514
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140526/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140526"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140526">
                stable_20140526
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140529/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140529"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140529">
                stable_20140529
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140625b/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140625b"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140625b">
                stable_20140625b
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140626/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140626"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140626">
                stable_20140626
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140627/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140627"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140627">
                stable_20140627
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140629/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140629"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140629">
                stable_20140629
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140714/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140714"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140714">
                stable_20140714
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140721/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140721"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140721">
                stable_20140721
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140728/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140728"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140728">
                stable_20140728
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140813/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140813"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140813">
                stable_20140813
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140820/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140820"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140820">
                stable_20140820
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140916/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140916"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140916">
                stable_20140916
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140918/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140918"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140918">
                stable_20140918
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20140919/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20140919"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20140919">
                stable_20140919
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141006/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141006"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141006">
                stable_20141006
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141007/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141007"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141007">
                stable_20141007
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141020/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141020"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141020">
                stable_20141020
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141103/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141103"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141103">
                stable_20141103
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141110/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141110"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141110">
                stable_20141110
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141117/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141117"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141117">
                stable_20141117
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141119/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141119"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141119">
                stable_20141119
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141124/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141124"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141124">
                stable_20141124
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141201/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141201"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141201">
                stable_20141201
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141208/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141208"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141208">
                stable_20141208
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141215/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141215"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141215">
                stable_20141215
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20141223/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20141223"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20141223">
                stable_20141223
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150106/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150106"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150106">
                stable_20150106
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150113/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150113"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150113">
                stable_20150113
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150122/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150122"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150122">
                stable_20150122
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150202/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150202"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150202">
                stable_20150202
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150210/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150210"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150210">
                stable_20150210
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150216/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150216"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150216">
                stable_20150216
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150302/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150302"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150302">
                stable_20150302
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150316/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150316"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150316">
                stable_20150316
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150323/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150323"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150323">
                stable_20150323
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150330/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150330"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150330">
                stable_20150330
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150406a/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150406a"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150406a">
                stable_20150406a
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150406/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150406"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150406">
                stable_20150406
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150413/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150413"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150413">
                stable_20150413
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150427/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150427"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150427">
                stable_20150427
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150504/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150504"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150504">
                stable_20150504
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150511/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150511"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150511">
                stable_20150511
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150518/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150518"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150518">
                stable_20150518
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150525/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150525"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150525">
                stable_20150525
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150601/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150601"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150601">
                stable_20150601
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150615/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150615"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150615">
                stable_20150615
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150622/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150622"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150622">
                stable_20150622
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150629_emergency/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150629_emergency"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150629_emergency">
                stable_20150629_emergency
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150629/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150629"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150629">
                stable_20150629
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150707/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150707"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150707">
                stable_20150707
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150713_syndication/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150713_syndication"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150713_syndication">
                stable_20150713_syndication
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150713/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150713"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150713">
                stable_20150713
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150720/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150720"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150720">
                stable_20150720
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150727/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150727"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150727">
                stable_20150727
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150803_emergency/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150803_emergency"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150803_emergency">
                stable_20150803_emergency
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150803/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150803"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150803">
                stable_20150803
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150811/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150811"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150811">
                stable_20150811
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150817_d2bm_logging/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150817_d2bm_logging"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150817_d2bm_logging">
                stable_20150817_d2bm_logging
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150817/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150817"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150817">
                stable_20150817
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150831/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150831"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150831">
                stable_20150831
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20150928/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20150928"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20150928">
                stable_20150928
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20151026/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20151026"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20151026">
                stable_20151026
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20151116/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20151116"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20151116">
                stable_20151116
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20151130/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20151130"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20151130">
                stable_20151130
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20151207/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20151207"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20151207">
                stable_20151207
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/stable_20151214/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="stable_20151214"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="stable_20151214">
                stable_20151214
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/template/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="template"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="template">
                template
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/tern0_6_2/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="tern0_6_2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="tern0_6_2">
                tern0_6_2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/test/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="test"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="test">
                test
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/test123/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="test123"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="test123">
                test123
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/testPush/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="testPush"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="testPush">
                testPush
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/eclipse/orion.client/blob/ubolatov_new_landing/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
               data-name="ubolatov_new_landing"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ubolatov_new_landing">
                ubolatov_new_landing
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20141016-1200/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20141016-1200"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20141016-1200">v20141016-1200</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140317-1720/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140317-1720"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140317-1720">v20140317-1720</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140317-1530/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140317-1530"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140317-1530">v20140317-1530</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140317-1408/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140317-1408"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140317-1408">v20140317-1408</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140317-0910/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140317-0910"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140317-0910">v20140317-0910</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140314-2255/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140314-2255"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140314-2255">v20140314-2255</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140314-2012/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140314-2012"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140314-2012">v20140314-2012</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140314-1532/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140314-1532"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140314-1532">v20140314-1532</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140314-1316/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140314-1316"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140314-1316">v20140314-1316</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140314-1231/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140314-1231"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140314-1231">v20140314-1231</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140314-0310/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140314-0310"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140314-0310">v20140314-0310</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140314-0221/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140314-0221"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140314-0221">v20140314-0221</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140313-2303/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140313-2303"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140313-2303">v20140313-2303</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140313-1939/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140313-1939"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140313-1939">v20140313-1939</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140313-1758/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140313-1758"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140313-1758">v20140313-1758</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140313-0025/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140313-0025"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140313-0025">v20140313-0025</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140312-1913/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140312-1913"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140312-1913">v20140312-1913</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140312-1713/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140312-1713"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140312-1713">v20140312-1713</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140311-2250/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140311-2250"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140311-2250">v20140311-2250</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140311-1824/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140311-1824"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140311-1824">v20140311-1824</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140311-1801/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140311-1801"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140311-1801">v20140311-1801</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140311-1522/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140311-1522"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140311-1522">v20140311-1522</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140310-2212/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140310-2212"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140310-2212">v20140310-2212</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140310-2107/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140310-2107"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140310-2107">v20140310-2107</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140310-1552/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140310-1552"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140310-1552">v20140310-1552</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140307-2356/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140307-2356"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140307-2356">v20140307-2356</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140307-2245/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140307-2245"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140307-2245">v20140307-2245</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140307-2059/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140307-2059"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140307-2059">v20140307-2059</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140307-2019/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140307-2019"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140307-2019">v20140307-2019</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140306-2205/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140306-2205"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140306-2205">v20140306-2205</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140306-2043/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140306-2043"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140306-2043">v20140306-2043</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140306-1910/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140306-1910"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140306-1910">v20140306-1910</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140306-1631/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140306-1631"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140306-1631">v20140306-1631</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140306-0300/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140306-0300"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140306-0300">v20140306-0300</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140306-0133/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140306-0133"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140306-0133">v20140306-0133</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140305-1943/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140305-1943"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140305-1943">v20140305-1943</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140305-1746/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140305-1746"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140305-1746">v20140305-1746</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140305-1735/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140305-1735"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140305-1735">v20140305-1735</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140305-1657/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140305-1657"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140305-1657">v20140305-1657</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140305-1609/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140305-1609"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140305-1609">v20140305-1609</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140305-1435/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140305-1435"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140305-1435">v20140305-1435</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140305-0034/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140305-0034"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140305-0034">v20140305-0034</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140304-2213/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140304-2213"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140304-2213">v20140304-2213</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140304-1729/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140304-1729"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140304-1729">v20140304-1729</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140304-1656/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140304-1656"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140304-1656">v20140304-1656</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140304-1057/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140304-1057"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140304-1057">v20140304-1057</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140304-0855/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140304-0855"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140304-0855">v20140304-0855</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140303-2214/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140303-2214"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140303-2214">v20140303-2214</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140303-2147/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140303-2147"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140303-2147">v20140303-2147</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140303-1629/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140303-1629"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140303-1629">v20140303-1629</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140303-1617/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140303-1617"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140303-1617">v20140303-1617</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140227-0406/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140227-0406"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140227-0406">v20140227-0406</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140226-2047/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140226-2047"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140226-2047">v20140226-2047</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140226-1939/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140226-1939"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140226-1939">v20140226-1939</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140225-2245/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140225-2245"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140225-2245">v20140225-2245</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140225-1959/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140225-1959"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140225-1959">v20140225-1959</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140224-2300/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140224-2300"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140224-2300">v20140224-2300</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140224-1908/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140224-1908"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140224-1908">v20140224-1908</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140223-2323/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140223-2323"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140223-2323">v20140223-2323</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140222-1606/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140222-1606"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140222-1606">v20140222-1606</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140221-1934/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140221-1934"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140221-1934">v20140221-1934</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140221-1733/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140221-1733"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140221-1733">v20140221-1733</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140220-2312/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140220-2312"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140220-2312">v20140220-2312</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140220-1758/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140220-1758"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140220-1758">v20140220-1758</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140220-1740/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140220-1740"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140220-1740">v20140220-1740</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140220-1733/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140220-1733"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140220-1733">v20140220-1733</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140219-2206/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140219-2206"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140219-2206">v20140219-2206</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140219-2014/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140219-2014"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140219-2014">v20140219-2014</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140219-1943/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140219-1943"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140219-1943">v20140219-1943</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140219-1809/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140219-1809"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140219-1809">v20140219-1809</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140218-2242/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140218-2242"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140218-2242">v20140218-2242</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140218-1556/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140218-1556"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140218-1556">v20140218-1556</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140217-1925/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140217-1925"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140217-1925">v20140217-1925</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140217-1241/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140217-1241"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140217-1241">v20140217-1241</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140214-1721/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140214-1721"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140214-1721">v20140214-1721</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140213-2353/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140213-2353"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140213-2353">v20140213-2353</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140213-2005/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140213-2005"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140213-2005">v20140213-2005</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140213-1804/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140213-1804"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140213-1804">v20140213-1804</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140213-1640/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140213-1640"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140213-1640">v20140213-1640</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140212-2112/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140212-2112"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140212-2112">v20140212-2112</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140212-2024/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140212-2024"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140212-2024">v20140212-2024</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140212-1057/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140212-1057"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140212-1057">v20140212-1057</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140212-0903/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140212-0903"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140212-0903">v20140212-0903</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140212-0145/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140212-0145"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140212-0145">v20140212-0145</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140211-2327/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140211-2327"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140211-2327">v20140211-2327</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140211-2256/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140211-2256"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140211-2256">v20140211-2256</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140211-2254/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140211-2254"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140211-2254">v20140211-2254</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140211-2244/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140211-2244"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140211-2244">v20140211-2244</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140211-2134/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140211-2134"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140211-2134">v20140211-2134</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140211-2054/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140211-2054"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140211-2054">v20140211-2054</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140211-1848/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140211-1848"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140211-1848">v20140211-1848</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140211-1803/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140211-1803"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140211-1803">v20140211-1803</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140211-1622/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140211-1622"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140211-1622">v20140211-1622</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140211-1316/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140211-1316"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140211-1316">v20140211-1316</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140211-0049/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140211-0049"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140211-0049">v20140211-0049</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140210-2226/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140210-2226"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140210-2226">v20140210-2226</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140210-2154/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140210-2154"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140210-2154">v20140210-2154</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140210-2019/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140210-2019"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140210-2019">v20140210-2019</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140210-1757/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140210-1757"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140210-1757">v20140210-1757</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eclipse/orion.client/tree/v20140210-1728/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js"
                 data-name="v20140210-1728"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v20140210-1728">v20140210-1728</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/eclipse/orion.client/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/eclipse/orion.client" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">orion.client</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/eclipse/orion.client/tree/master/bundles" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">bundles</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/eclipse/orion.client/tree/master/bundles/org.eclipse.orion.client.core" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">org.eclipse.orion.client.core</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/eclipse/orion.client/tree/master/bundles/org.eclipse.orion.client.core/web" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">web</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/eclipse/orion.client/tree/master/bundles/org.eclipse.orion.client.core/web/orion" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">orion</span></a></span><span class="separator">/</span><strong class="final-path">Deferred.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/eclipse/orion.client/commit/92c7ba52b282190cead73bc50a2d84c18fff30dd" data-pjax>
          92c7ba5
        </a>
        <time datetime="2014-07-16T02:34:24Z" is="relative-time">Jul 15, 2014</time>
      </span>
      <div>
        <img alt="@skaegi" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/541119?v=3&amp;s=40" width="20" />
        <a href="/skaegi" class="user-mention" rel="contributor">skaegi</a>
          <a href="/eclipse/orion.client/commit/92c7ba52b282190cead73bc50a2d84c18fff30dd" class="message" data-pjax="true" title="Cleaning up for ESLint">Cleaning up for ESLint</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>4</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="skaegi" href="/eclipse/orion.client/commits/master/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js?author=skaegi"><img alt="@skaegi" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/541119?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mamacdon" href="/eclipse/orion.client/commits/master/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js?author=mamacdon"><img alt="@mamacdon" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/382404?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="janczarska" href="/eclipse/orion.client/commits/master/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js?author=janczarska"><img alt="@janczarska" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/514532?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="grant-g" href="/eclipse/orion.client/commits/master/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js?author=grant-g"><img alt="@grant-g" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1242150?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@skaegi" height="24" src="https://avatars2.githubusercontent.com/u/541119?v=3&amp;s=48" width="24" />
            <a href="/skaegi">skaegi</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mamacdon" height="24" src="https://avatars3.githubusercontent.com/u/382404?v=3&amp;s=48" width="24" />
            <a href="/mamacdon">mamacdon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@janczarska" height="24" src="https://avatars1.githubusercontent.com/u/514532?v=3&amp;s=48" width="24" />
            <a href="/janczarska">janczarska</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@grant-g" height="24" src="https://avatars0.githubusercontent.com/u/1242150?v=3&amp;s=48" width="24" />
            <a href="/grant-g">grant-g</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/eclipse/orion.client/raw/master/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/eclipse/orion.client/blame/master/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/eclipse/orion.client/commits/master/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>


        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-pencil "></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan "></span>
        </button>
  </div>

  <div class="file-info">
      406 lines (380 sloc)
      <span class="file-info-divider"></span>
    14.4 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*******************************************************************************</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@license</span></span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright (c) 2012 IBM Corporation and others.</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * All rights reserved. This program and the accompanying materials are made </span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * available under the terms of the Eclipse Public License v1.0 </span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution </span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). </span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Contributors: IBM Corporation - initial API and implementation</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> ******************************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*eslint-env browser, amd, node*/</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">root</span>, <span class="pl-smi">factory</span>) { <span class="pl-c">// UMD</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">define</span>.<span class="pl-smi">amd</span>) { <span class="pl-c">//$NON-NLS-0$</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">define</span>(factory);</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">exports</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span>) { <span class="pl-c">//$NON-NLS-0$</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-en">factory</span>();</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">root</span>.<span class="pl-smi">orion</span> <span class="pl-k">=</span> <span class="pl-smi">root</span>.<span class="pl-smi">orion</span> <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">root</span>.<span class="pl-smi">orion</span>.<span class="pl-smi">Deferred</span> <span class="pl-k">=</span> <span class="pl-en">factory</span>();</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">}(<span class="pl-v">this</span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> queue <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">        running <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">run</span>() {</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> fn;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">while</span> ((fn <span class="pl-k">=</span> <span class="pl-smi">queue</span>.<span class="pl-c1">shift</span>())) {</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">fn</span>();</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">        running <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> runAsync <span class="pl-k">=</span> (<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">process</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">process</span>.<span class="pl-smi">nextTick</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nextTick <span class="pl-k">=</span> <span class="pl-smi">process</span>.<span class="pl-smi">nextTick</span>;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    		<span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    			<span class="pl-en">nextTick</span>(run);</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    		};</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> MutationObserver <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> observer <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">MutationObserver</span>(run);</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">observer</span>.<span class="pl-en">observe</span>(div, {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">            	attributes<span class="pl-k">:</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">        	});</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">        	<span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        		<span class="pl-smi">div</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>_tick<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">        	};</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">setTimeout</span>(run, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">	})();</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">enqueue</span>(<span class="pl-smi">fn</span>) {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">queue</span>.<span class="pl-c1">push</span>(fn);</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>running) {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">            running <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">runAsync</span>();</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">noReturn</span>(<span class="pl-smi">fn</span>) {</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">result</span>) {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">fn</span>(result);</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">settleDeferred</span>(<span class="pl-smi">fn</span>, <span class="pl-smi">result</span>, <span class="pl-smi">deferred</span>) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    	<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">    		<span class="pl-k">var</span> listenerResult <span class="pl-k">=</span> <span class="pl-en">fn</span>(result);</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    		<span class="pl-k">var</span> listenerThen <span class="pl-k">=</span> listenerResult <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">typeof</span> listenerResult <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> <span class="pl-k">typeof</span> listenerResult <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">listenerResult</span>.<span class="pl-smi">then</span>;</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    		<span class="pl-k">if</span> (<span class="pl-k">typeof</span> listenerThen <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">    			<span class="pl-k">if</span> (listenerResult <span class="pl-k">===</span> <span class="pl-smi">deferred</span>.<span class="pl-smi">promise</span>) {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">    				<span class="pl-smi">deferred</span>.<span class="pl-en">reject</span>(<span class="pl-k">new</span> <span class="pl-en">TypeError</span>());</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">    			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">    				<span class="pl-k">var</span> listenerResultCancel <span class="pl-k">=</span> <span class="pl-smi">listenerResult</span>.<span class="pl-smi">cancel</span>;</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    				<span class="pl-k">if</span> (<span class="pl-k">typeof</span> listenerResultCancel <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    					<span class="pl-smi">deferred</span>.<span class="pl-smi">_parentCancel</span> <span class="pl-k">=</span> <span class="pl-smi">listenerResultCancel</span>.<span class="pl-en">bind</span>(listenerResult);</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">    					<span class="pl-k">delete</span> <span class="pl-smi">deferred</span>.<span class="pl-smi">_parentCancel</span>;</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">    				}</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">    				<span class="pl-smi">listenerThen</span>.<span class="pl-c1">call</span>(listenerResult, <span class="pl-en">noReturn</span>(<span class="pl-smi">deferred</span>.<span class="pl-smi">resolve</span>), <span class="pl-en">noReturn</span>(<span class="pl-smi">deferred</span>.<span class="pl-smi">reject</span>), <span class="pl-en">noReturn</span>(<span class="pl-smi">deferred</span>.<span class="pl-smi">progress</span>));</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">    			}</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">    		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">    			<span class="pl-smi">deferred</span>.<span class="pl-en">resolve</span>(listenerResult);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">    		}</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    	} <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">    		<span class="pl-smi">deferred</span>.<span class="pl-en">reject</span>(e);</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    	}</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@name</span> orion.Promise</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@class</span> Interface representing an eventual value.</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@description</span> Promise is an interface that represents an eventual value returned from the single completion of an operation.</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * &lt;p&gt;For a concrete class that implements Promise and provides additional API, see {@link orion.Deferred}.&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@see</span> orion.Deferred</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@see</span> orion.Deferred#promise</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@name</span> then</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @memberOf orion.Promise.prototype</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@description</span> Adds handlers to be called on fulfillment or progress of this promise.</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> {Function} [onResolve] Called when this promise is resolved.</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> {Function} [onReject] Called when this promise is rejected.</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> {Function} [onProgress] May be called to report progress events on this promise.</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@returns</span> {orion.Promise} A new promise that is fulfilled when the given &lt;code&gt;onResolve&lt;/code&gt; or &lt;code&gt;onReject&lt;/code&gt;</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * callback is finished. The callback&#39;s return value gives the fulfillment value of the returned promise.</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Cancels this promise.</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@name</span> cancel</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @memberOf orion.Promise.prototype</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> {Object} reason The reason for canceling this promise.</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> {Boolean} [strict]</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@name</span> orion.Deferred</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@borrows</span> orion.Promise#then as #then</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@borrows</span> orion.Promise#cancel as #cancel</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@class</span> Provides abstraction over asynchronous operations.</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@description</span> Deferred provides abstraction over asynchronous operations.</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * &lt;p&gt;Because Deferred implements the {@link orion.Promise} interface, a Deferred may be used anywhere a Promise is called for.</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * However, in most such cases it is recommended to use the Deferred&#39;s {@link #promise} field instead, which exposes a </span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * simplified, minimally &lt;a href=&quot;https://github.com/promises-aplus/promises-spec&quot;&gt;Promises/A+&lt;/a&gt;-compliant interface to callers.&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">Deferred</span>() {</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> result, state, listeners <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">            _this <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">notify</span>() {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> listener;</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">while</span> ((listener <span class="pl-k">=</span> <span class="pl-smi">listeners</span>.<span class="pl-c1">shift</span>())) {</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> deferred <span class="pl-k">=</span> <span class="pl-smi">listener</span>.<span class="pl-smi">deferred</span>;</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> methodName <span class="pl-k">=</span> state <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>fulfilled<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>resolve<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>reject<span class="pl-pds">&quot;</span></span>; <span class="pl-c">//$NON-NLS-0$ //$NON-NLS-1$ //$NON-NLS-2$</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> fn <span class="pl-k">=</span> listener[methodName];</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">typeof</span> fn <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) { <span class="pl-c">//$NON-NLS-0$</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">                	<span class="pl-en">settleDeferred</span>(fn, result, deferred);</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">                    deferred[methodName](result);</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_reject</span>(<span class="pl-smi">error</span>) {</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">delete</span> <span class="pl-smi">_this</span>.<span class="pl-smi">_parentCancel</span>;</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">            state <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>rejected<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">            result <span class="pl-k">=</span> error;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">listeners</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">enqueue</span>(notify);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_resolve</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span> <span class="pl-en">once</span>(<span class="pl-smi">fn</span>) {</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">result</span>) {</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span>state <span class="pl-k">||</span> state <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>assumed<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">                          <span class="pl-en">fn</span>(result);</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">delete</span> <span class="pl-smi">_this</span>.<span class="pl-smi">_parentCancel</span>;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> valueThen <span class="pl-k">=</span> value <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">typeof</span> value <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> <span class="pl-k">typeof</span> value <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">value</span>.<span class="pl-smi">then</span>;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">typeof</span> valueThen <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (value <span class="pl-k">===</span> _this) {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">_reject</span>(<span class="pl-k">new</span> <span class="pl-en">TypeError</span>());</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">                    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">                        state <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>assumed<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> valueCancel <span class="pl-k">=</span> value <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">value</span>.<span class="pl-smi">cancel</span>;</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> valueCancel <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">var</span> deferred <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Deferred</span>();</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">                            value <span class="pl-k">=</span> <span class="pl-smi">deferred</span>.<span class="pl-smi">promise</span>;</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">                                <span class="pl-en">valueThen</span>(<span class="pl-smi">deferred</span>.<span class="pl-smi">resolve</span>, <span class="pl-smi">deferred</span>.<span class="pl-smi">reject</span>, <span class="pl-smi">deferred</span>.<span class="pl-smi">progress</span>);</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">                            } <span class="pl-k">catch</span> (thenError) {</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">                                <span class="pl-smi">deferred</span>.<span class="pl-en">reject</span>(thenError);</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">                            valueCancel <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-smi">cancel</span>;</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">                            valueThen <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-smi">then</span>;</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">                        result <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">valueThen</span>.<span class="pl-c1">call</span>(value, <span class="pl-en">once</span>(_resolve), <span class="pl-en">once</span>(_reject));</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">_this</span>.<span class="pl-smi">_parentCancel</span> <span class="pl-k">=</span> <span class="pl-smi">valueCancel</span>.<span class="pl-en">bind</span>(value);</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">                    state <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>fulfilled<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">                    result <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">listeners</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">enqueue</span>(notify);</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">catch</span> (error) {</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">once</span>(_reject)(error);</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">cancel</span>() {</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> parentCancel <span class="pl-k">=</span> <span class="pl-smi">_this</span>.<span class="pl-smi">_parentCancel</span>;</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (parentCancel) {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">delete</span> <span class="pl-smi">_this</span>.<span class="pl-smi">_parentCancel</span>;</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">parentCancel</span>();</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span>state) {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> cancelError <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Cancel<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">cancelError</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Cancel<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">_reject</span>(cancelError);</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Resolves this Deferred.</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@name</span> resolve</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * @memberOf orion.Deferred.prototype</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> {Object} value</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@returns</span> {orion.Promise}</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         */</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>.<span class="pl-smi">resolve</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>state) {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">_resolve</span>(value);</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> _this;</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Rejects this Deferred.</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@name</span> reject</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * @memberOf orion.Deferred.prototype</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> {Object} error</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> {Boolean} [strict]</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@returns</span> {orion.Promise}</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         */</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>.<span class="pl-smi">reject</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">error</span>) {</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>state) {</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">_reject</span>(error);</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> _this;</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Notifies listeners of progress on this Deferred.</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@name</span> progress</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * @memberOf orion.Deferred.prototype</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> {Object} update The progress update.</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@returns</span> {orion.Promise}</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         */</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>.<span class="pl-smi">progress</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">update</span>) {</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>state) {</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">listeners</span>.<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">listener</span>) {</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">listener</span>.<span class="pl-smi">progress</span>) {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">                            <span class="pl-smi">listener</span>.<span class="pl-en">progress</span>(update);</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">                        } <span class="pl-k">catch</span> (ignore) {</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">                            <span class="pl-c">// ignore</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">_this</span>.<span class="pl-smi">promise</span>;</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>.<span class="pl-smi">cancel</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">_this</span>.<span class="pl-smi">_parentCancel</span>) {</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">setTimeout</span>(cancel, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">cancel</span>();</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> _this;</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Note: &quot;then&quot; ALWAYS returns before having onResolve or onReject called as per http://promises-aplus.github.com/promises-spec/</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>.<span class="pl-smi">then</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">onFulfill</span>, <span class="pl-smi">onReject</span>, <span class="pl-smi">onProgress</span>) {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">        	<span class="pl-k">var</span> deferred <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Deferred</span>();</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">deferred</span>.<span class="pl-smi">_parentCancel</span> <span class="pl-k">=</span> <span class="pl-smi">_this</span>.<span class="pl-smi">promise</span>.<span class="pl-smi">cancel</span>;</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">listeners</span>.<span class="pl-c1">push</span>({</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">                resolve<span class="pl-k">:</span> onFulfill,</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">                reject<span class="pl-k">:</span> onReject,</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">                progress<span class="pl-k">:</span> onProgress,</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">                deferred<span class="pl-k">:</span> deferred</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (state <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>fulfilled<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> state <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>rejected<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">enqueue</span>(notify);</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">deferred</span>.<span class="pl-smi">promise</span>;</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * The promise exposed by this Deferred.</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@name</span> promise</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * @field</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * @memberOf orion.Deferred.prototype</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@type</span> orion.Promise</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         */</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>.<span class="pl-smi">promise</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">            then<span class="pl-k">:</span> <span class="pl-smi">_this</span>.<span class="pl-smi">then</span>,</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">            cancel<span class="pl-k">:</span> <span class="pl-smi">_this</span>.<span class="pl-smi">cancel</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Returns a promise that represents the outcome of all the input promises.</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * &lt;p&gt;When &lt;code&gt;all&lt;/code&gt; is called with a single parameter, the returned promise has &lt;dfn&gt;eager&lt;/dfn&gt; semantics,</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * meaning that if any input promise rejects, the returned promise immediately rejects, without waiting for the rest of the</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * input promises to fulfill.&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * To obtain &lt;dfn&gt;lazy&lt;/dfn&gt; semantics (meaning the returned promise waits for every input promise to fulfill), pass the</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * optional parameter &lt;code&gt;optOnError&lt;/code&gt;.</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@name</span> all</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @memberOf orion.Deferred</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@static</span></span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> {orion.Promise[]} promises The input promises.</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> {Function} [optOnError] Handles a rejected input promise. &lt;code&gt;optOnError&lt;/code&gt; is invoked for every rejected</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * input promise, and is passed the reason the input promise was rejected. &lt;p&gt;&lt;code&gt;optOnError&lt;/code&gt; can return a value, which</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * allows it to act as a transformer: the return value serves as the final fulfillment value of the rejected promise in the </span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * results array generated by &lt;code&gt;all&lt;/code&gt;.</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@returns</span> {orion.Promise} A new promise. The returned promise is generally fulfilled to an &lt;code&gt;Array&lt;/code&gt; whose elements</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * give the fulfillment values of the input promises. &lt;p&gt;However, if an input promise rejects and eager semantics is used, the </span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * returned promise will instead be fulfilled to a single error value.&lt;/p&gt;</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">Deferred</span>.<span class="pl-en">all</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">promises</span>, <span class="pl-smi">optOnError</span>) {</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> count <span class="pl-k">=</span> <span class="pl-smi">promises</span>.<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">            result <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">            rejected <span class="pl-k">=</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">            deferred <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Deferred</span>();</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">deferred</span>.<span class="pl-en">then</span>(<span class="pl-c1">undefined</span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">            rejected <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">promises</span>.<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">promise</span>) {</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">promise</span>.<span class="pl-smi">cancel</span>) {</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">promise</span>.<span class="pl-en">cancel</span>();</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">onResolve</span>(<span class="pl-smi">i</span>, <span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>rejected) {</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">                result[i] <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">--</span>count <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">deferred</span>.<span class="pl-en">resolve</span>(result);</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">onReject</span>(<span class="pl-smi">i</span>, <span class="pl-smi">error</span>) {</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>rejected) {</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (optOnError) {</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">onResolve</span>(i, <span class="pl-en">optOnError</span>(error));</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">                    } <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">                        error <span class="pl-k">=</span> e;</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">deferred</span>.<span class="pl-en">reject</span>(error);</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (count <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">deferred</span>.<span class="pl-en">resolve</span>(result);</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">promises</span>.<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">promise</span>, <span class="pl-smi">i</span>) {</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">promise</span>.<span class="pl-en">then</span>(<span class="pl-smi">onResolve</span>.<span class="pl-en">bind</span>(<span class="pl-c1">undefined</span>, i), <span class="pl-smi">onReject</span>.<span class="pl-en">bind</span>(<span class="pl-c1">undefined</span>, i));</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">deferred</span>.<span class="pl-smi">promise</span>;</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Applies callbacks to a promise or to a regular object.</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@name</span> when</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @memberOf orion.Deferred</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@static</span></span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> {Object|orion.Promise} value Either a {@link orion.Promise}, or a normal value.</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> {Function} onResolve Called when the &lt;code&gt;value&lt;/code&gt; promise is resolved. If &lt;code&gt;value&lt;/code&gt; is not a promise,</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * this function is called immediately.</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> {Function} onReject Called when the &lt;code&gt;value&lt;/code&gt; promise is rejected. If &lt;code&gt;value&lt;/code&gt; is not a promise, </span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * this function is never called.</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> {Function} onProgress Called when the &lt;code&gt;value&lt;/code&gt; promise provides a progress update. If &lt;code&gt;value&lt;/code&gt; is</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * not a promise, this function is never called.</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@returns</span> {orion.Promise} A new promise.</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">Deferred</span>.<span class="pl-en">when</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">onResolve</span>, <span class="pl-smi">onReject</span>, <span class="pl-smi">onProgress</span>) {</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> promise, deferred;</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (value <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">value</span>.<span class="pl-smi">then</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) { <span class="pl-c">//$NON-NLS-0$</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">            promise <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">            deferred <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Deferred</span>();</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">deferred</span>.<span class="pl-en">resolve</span>(value);</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">            promise <span class="pl-k">=</span> <span class="pl-smi">deferred</span>.<span class="pl-smi">promise</span>;</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">promise</span>.<span class="pl-en">then</span>(onResolve, onReject, onProgress);</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> Deferred;</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">}));</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github " title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.08839s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-5b83ba63ee585108ecb82c170d0e6cd00e424114f31ecc0de1cf982e536b70d8.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

