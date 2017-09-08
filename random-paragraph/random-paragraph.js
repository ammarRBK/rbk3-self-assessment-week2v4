/**
 * Use Chance.js to complete the function `randomParagraphWithFiveSentences`.
 * 
 * It takes no arguments and should return a paragraph with five sentences
 * populated by semi-pronounceable random (nonsense) words
 *
 * The Chance library exists on the `chance` object in the global scope
 */

var randomParagraphWithFiveSentences = function() {
  // your code is here
 return chance.phone() +" " +chance.google_analytics()+ "  "+chance.ipv6()
 +" "+chance.twitter() + " "+chance.klout() ;
};
