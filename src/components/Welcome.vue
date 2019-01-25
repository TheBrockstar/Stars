<template>
  <div class="welcome">
    <h1>{{ tagline }}</h1>
    <div class='stars' id='dwarf-stars'></div>
    <div class='stars' id='giant-stars'></div>
    <div class='stars' id='supergiant-stars'></div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      tagline: 'Welcome! My Portfolio is Under Construction...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

h1, h2
  font-weight: bold;

ul
  list-style-type: none;
  padding: 0;

li
  display: inline-block;
  margin: 0 10px;

a
  color: #42b983;

.welcome
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

// Star Field

.star
  position: absolute;
  top: 50%;
  left: 25%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: whitesmoke;

@function safe-unquote ($param)
  @return if(type-of($param) == string, unquote($param), $param)

@function multiple-box-shadow ($stars)
  $bxshadow: ()
  @for $i from 1 to $stars
    $bxshadow: append($bxshadow, (random(2000) + 0px) (random(2000) + 0px) #fff, comma)
  @return safe-unquote($bxshadow);

$dwarf-shadows: multiple-box-shadow(500)
$giant-shadows: multiple-box-shadow(200)
$supergiant-shadows: multiple-box-shadow(100)

html
  overflow: hidden

.stars
  position: absolute;
  top: 0%
  left: 0%
  border-radius: 50%
  background: transparent

#dwarf-stars
  width: 1px
  height: 1px
  box-shadow: $dwarf-shadows
  animation: dwarf-blink 3s infinite

#giant-stars
  width: 2px
  height: 2px
  box-shadow: $giant-shadows
  animation: giant-blink 5s infinite

#supergiant-stars
  width: 3px
  height: 3px
  box-shadow: $supergiant-shadows
  animation: supergiant-blink 8s infinite

@keyframes supergiant-blink
  0%
    box-shadow: $supergiant-shadows;
  21%
    $colors: '#fff', 'transparent';
    $stars: $supergiant-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, $i * 2), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i * 2, $star)
    box-shadow: $stars;
  54%
    $colors: '#fff', 'transparent';
    $stars: $supergiant-shadows;
    @for $i from 1 to length($stars)
      $star: set-nth(nth($stars, $i), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i, $star)
    box-shadow: $stars;
  87%
    $colors: '#fff', 'transparent';
    $stars: $supergiant-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, ($i * 2) - 1), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, ($i * 2) - 1, $star)
    box-shadow: $stars;
  100%
    box-shadow: $supergiant-shadows;

@keyframes giant-blink
  0%
    box-shadow: $giant-shadows;
  21%
    $colors: '#fff', 'transparent';
    $stars: $giant-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, $i * 2), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i * 2, $star)
    box-shadow: $stars;
  54%
    $colors: '#fff', 'transparent';
    $stars: $giant-shadows;
    @for $i from 1 to length($stars)
      $star: set-nth(nth($stars, $i), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i, $star)
    box-shadow: $stars;
  87%
    $colors: '#fff', 'transparent';
    $stars: $giant-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, ($i * 2) - 1), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, ($i * 2) - 1, $star)
    box-shadow: $stars;
  100%
    box-shadow: $giant-shadows;

@keyframes dwarf-blink
  0%
    box-shadow: $dwarf-shadows;
  21%
    $colors: '#fff', 'transparent';
    $stars: $dwarf-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, $i * 2), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i * 2, $star)
    box-shadow: $stars;
  54%
    $colors: '#fff', 'transparent';
    $stars: $dwarf-shadows;
    @for $i from 1 to length($stars)
      $star: set-nth(nth($stars, $i), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i, $star)
    box-shadow: $stars;
  87%
    $colors: '#fff', 'transparent';
    $stars: $dwarf-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, ($i * 2) - 1), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, ($i * 2) - 1, $star)
    box-shadow: $stars;
  100%
    box-shadow: $dwarf-shadows;
</style>
