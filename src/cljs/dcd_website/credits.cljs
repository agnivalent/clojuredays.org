(ns dcd-website.credits)

(def dcd-team
  [["Carlo Sciolla" "https://twitter.com/skuro" "twitter"]
   ["Vijay Kiran" "https://twitter.com/vijaykiran" "twitter"]
   ["Gene Lukyanchuk" "mailto:agnivalent@gmail.com" "email"]
   ["Joost Diepenmaat" "https://twitter.com/ZeekatSoftware" "twitter"]])

(defn credits []
  [:span
   [:div
    (letfn [(organizer [[name link link-type]]
              ^{:key link}
              [:span.org-info
               [:a {:href link
                    :target :_blank}
                [:img.icon.twitter {:src (str "img/icons/" link-type ".svg")}]
                name]])]
      (map organizer dcd-team))]
   [:h3 "Design & Art"]
   [:span.org-info
    [:a {:href "https://twitter.com/moolver_sin"
         :target :_blank}
     [:img.icon.twitter {:src "img/icons/twitter.svg"}]
     "Lubov Soltan"]]])
