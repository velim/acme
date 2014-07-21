(defproject acme "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.5.1"]
               [org.clojure/tools.reader "0.8.2"]
               [ring/ring-core "1.2.0"]
               [ring/ring-json "0.2.0"]
               [compojure "1.1.6"]
               [org.clojure/clojurescript "0.0-2138"]
               [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
               [cljs-http "0.1.2"]
               [om "0.3.6"]
               [com.facebook/react "0.8.0.1"]]
  :plugins [[lein-cljsbuild "1.0.1"]
          [lein-ring "0.8.7"]
          [lein-pdo "0.1.1"]]
  :ring {:handler acme.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]]}}
  :source-paths ["src/clj"]
  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}
  :cljsbuild {:builds [{:id "dev"
                      :source-paths ["src/cljs"]
                      :compiler {:output-to "resources/public/js/app.js"
                                 :output-dir "resources/public/js/out"
                                 :optimizations :none
                                 :source-map true}}]})
