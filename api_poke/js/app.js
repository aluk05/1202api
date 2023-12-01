//jsがきちんと動いているのかチェックできるようにアラートを追記する
//確認ができたらコメントアウトか削除をしておく
//alert('このjs動いているよ');


// データの塊を作成してみよう
// const data = {
//     hito: "もりた",
//     age: "34",
//     hako:["1","2","3"],
// };

// console.log(data,"データの塊");
// console.log(data.age,"森田先生の年齢")



// ここから一番初めのおまじない
const pokemonNum=   10;

const fetchPokemons = async () => {
    for (let i =1; i <= pokemonNum; i++) {
        await getPokemon(i);
    }
};
// ここまで一番初めのおまじない


// ここからポケモンのデータをfetchという処理を使って取得していく

// 【コードの解説】
// async(エイシンク、アシンク)を使って非同期処理
// awaitでその処理が終わるまで動かないでという指示を出すことができる
// res=返報

// const getPokemon = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const res = await fetch(url);
//     // console.log(res, "resの中身は？")
//     const pokemon = await res.json();
//     console.log(pokemon, "pokemonのデータをチェックしましょう！");
//     createPokemon(pokemon);
// };

// ここまでポケモンのデータをfetchという処理を使って取得していく


// ここからデータを表示するためのjQuery操作をする
function createPokemon(pokemon) {
    const poke = `
    <div class="box">
    <p>ID:${pokemon.id}</p>
    <p>名前：${pokemon.name}だよ</p>
    <p>身長：${pokemon.height}cm</p>
    <div class="box-img">
    <img src="${pokemon.sprites.front_default}" />
    </div>
    <div class="box-img">
    <img src="${pokemon.sprites.back_default}" />
    </div>
    <div class="box-img">
    <img src="${pokemon.sprites.front_shiny}" />
    </div>
    <div class="box-img">
    <img src="${pokemon.sprites.back_shiny}" />
    </div>
    </div>
    `;

    $(".list").append(poke);
}
// ここまでデータを表示するためのjQuery操作をする


// ここから最後のおまじないを実行させるコード
fetchPokemons();
// ここまで最後のおまじないを実行させるコード