// feel free to add other quote structures and words

var grammars = {

    universe : {

        planet : ["Mercury", "Venus", "Earth", "Mars", "Ceres", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Haumea", "Makemake", "Eris"],
        stellarObject : ["comet", "planet", "star", "world"],
        universe : ["cosmos", "universe", "observable universe", "milky way", "galaxy", "milky way galaxy", "solar system", "night sky", "interstellar space"],
        particle : ["atoms", "quarks", "higgs bosons", "particles", "molecules", "sub-atomic particles", "star dust", "elements", "cells"],

        adjectiveSmall : ["small",  "tiny"],
        adjectiveBig : ["immense", "enormous", "vast", "big"],
        adjectiveGen : ["exalted", "awesome", "enduring", "wonderful", "darker", "alien", "swirling", "glorious", "remarklable", "marvellous", "intricate", "beautiful"],

        verbhumanity : ["are reaching", "stare at", "gaze at", "read the story of", "think", "see", "understand", "contemplate"],
        verbwe : ["are staring at", "reach", "stare at", "gaze at", "read", "think of", "see the", "understand the", "contemplate the"],

        origin : ["The #universe# is made of #adjectiveGen# #particle# and we #verbwe# the #adverb# of it."]
    },

    cosmos : {

          humanSingular : ["The human race", "Humanity"],
          humanPlural : ["We", "Humans", "Human beings", "All living things"],
          concept : ["time", "distance", "mass", "energy", "gravity", "light", "the spacial fabric", "space and time", "singularity", "an anomaly of gravity", "matter", "dark matter"],
          number : ["400 billions", "billions and billions", "millions"],
          poetry: ["the poetry of", "the history of"],
          adverb : ["beauty", "power", "majesty", "immensity", "vastness"],
          rules : ["the laws of physics", "rules", "the laws of nature"],

          origin : ["#humanPlural# are made of #adjectiveGen# #particle# and we #verbwe# the #adverb# of it."]
      }

  // TODO: create variations of the generative structure, they will have different lengths in characters, somme shareable, some twittable //

}
