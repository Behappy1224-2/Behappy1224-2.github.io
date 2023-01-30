IMAGE_ROOT = "../../images"
MUSIC_ROOT = "../../music"


t = {
    name: '',
    id: '',
    imgbg: '',
    songs: 
    [
        {
            name: '',
            image: IMAGE_ROOT + '',
            music: MUSIC_ROOT + ''
        },
        {
            name: '',
            image: IMAGE_ROOT + '',
            music: MUSIC_ROOT + ''
        },
        {
            name: '',
            image: IMAGE_ROOT + '',
            music: MUSIC_ROOT + ''
        },
        {
            name: '',
            image: IMAGE_ROOT + '',
            music: MUSIC_ROOT + ''
        },
        {
            name: '',
            image: IMAGE_ROOT + '',
            music: MUSIC_ROOT + ''
        },
        {
            name: '',
            image: IMAGE_ROOT + '',
            music: MUSIC_ROOT + ''
        }
    ]
}
artists = [
    {
        name: 'Alan Walker',
        id: 'alanWalker',
        imgbg: IMAGE_ROOT + '/alanWalker/Alan.jpg',
        songs: 
        [
            {
                name: 'Fade/NCS',
                image: IMAGE_ROOT + '/alanWalker/faded.png',
                music: MUSIC_ROOT + '/alanWalker/Alan-Fade.mp3'
            },
            {
                name: 'Spectre/NCS',
                image: IMAGE_ROOT + '/alanWalker/OnMyWay.png',
                music: MUSIC_ROOT + '/alanWalker/Alan-Spectre.mp3'
            },
            {
                name: 'Force/NCS',
                image: IMAGE_ROOT + '/alanWalker/Dark.png',
                music: MUSIC_ROOT + '/alanWalker/Alan-Force.mp3'
            },
            {
                name: 'Alone',
                image: IMAGE_ROOT + '/alanWalker/Alone.png',
                music: MUSIC_ROOT + '/alanWalker/Alan-Alone.mp3'
            },
            {
                name: 'Sing Me To Sleep',
                image: IMAGE_ROOT + '/alanWalker/Sing.png',
                music: MUSIC_ROOT + '/alanWalker/Alan-SingMeToSleep.mp3'
            },
            {
                name: 'Lily',
                image: IMAGE_ROOT + '/alanWalker/Lily.png',
                music: MUSIC_ROOT + '/alanWalker/Alan-Lily.mp3'
            }
        ]
    },
    {
        name: 'Ed Sheeran',
        id: 'ed',
        imgbg: IMAGE_ROOT +'/ed/ed.jpg',
        songs: 
        [
            {
                name: 'Shape of You',
                image: IMAGE_ROOT + '/ed/shape.png',
                music: MUSIC_ROOT + '/ed/Ed_Shape_of_You.mp3'
            },
            {
                name: 'Thinking Out Loud',
                image: IMAGE_ROOT + '/ed/thinking.png',
                music: MUSIC_ROOT + '/ed/Ed_Thinking_Out_Loud.mp3'
            },
            {
                name: 'Bad Habits',
                image: IMAGE_ROOT + '/ed/bad_habit.png',
                music: MUSIC_ROOT + '/ed/Ed_Bad_Habits.mp3'
            },
            {
                name: 'Shivers',
                image: IMAGE_ROOT + '/ed/shivers.png',
                music: MUSIC_ROOT + '/ed/Ed_Shivers.mp3'
            },
            {
                name: 'Photograph',
                image: IMAGE_ROOT + '/ed/photograph.png',
                music: MUSIC_ROOT + '/ed/Ed_Photograph.mp3'
            },
            {
                name: 'Castle On The Hill',
                image: IMAGE_ROOT + '/ed/Castle.png',
                music: MUSIC_ROOT + '/ed/Ed_Castle_On_The_Hill.mp3'
            }
        ]
    },
    {
        name: 'Sia',
        id: 'sia',
        imgbg:IMAGE_ROOT + '/sia/sia.jpg',
        songs: 
        [
            {
                name: 'Chandelier',
                image: IMAGE_ROOT + '/sia/chandelier.png',
                music: MUSIC_ROOT + '/sia/Sia_chandelier.mp3'
            },
            {
                name: 'Elastic Heart',
                image: IMAGE_ROOT + '/sia/elastic.png',
                music: MUSIC_ROOT + '/sia/Sia_Elastic_Heart.mp3'
            },
            {
                name: 'Cheap Thrills',
                image: IMAGE_ROOT + '/sia/cheap.png',
                music: MUSIC_ROOT + '/sia/Sia_Cheap_Thrills.mp3'
            },
            {
                name: 'Fire Meet Gasoline',
                image: IMAGE_ROOT + '/sia/fire.png',
                music: MUSIC_ROOT + '/sia/Sia_Fire_Meet_Gasoline.mp3'
            },
            {
                name: 'The Greatest',
                image: IMAGE_ROOT + '/sia/the_greatest.png',
                music: MUSIC_ROOT + '/sia/Sia_The_Greatest.mp3'
            },
            {
                name: 'Unstoppable',
                image: IMAGE_ROOT + '/sia/unstoppable.png',
                music: MUSIC_ROOT + '/sia/Sia_Unstoppable.mp3'
            }
        ]
    },
    {
        name: 'Marnoo5',
        id: 'marnoo5',
        imgbg: IMAGE_ROOT +'/maroon5/maroon5.jpg',
        songs: 
        [
            {
                name: 'Girls Like You',
                image: IMAGE_ROOT + '/maroon5/girl.png',
                music: MUSIC_ROOT + '/maroon/Maroon5_Girls_Like_You.mp3'
            },
            {
                name: 'Payphone',
                image: IMAGE_ROOT + '/maroon5/payphone.png',
                music: MUSIC_ROOT + '/maroon/Maroon5_Payphone.mp3'
            },
            {
                name: 'Animals',
                image: IMAGE_ROOT + '/maroon5/animal.png',
                music: MUSIC_ROOT + '/maroon/Maroon5_Animals.mp3'
            },
            {
                name: 'One More night',
                image: IMAGE_ROOT + '/maroon5/One_more_night.png',
                music: MUSIC_ROOT + '/maroon/Maroon5_One_More_Night.mp3'
            },
            {
                name: 'Maps',
                image: IMAGE_ROOT + '/maroon5/maps.png',
                music: MUSIC_ROOT + '/maroon/Maroon5_Maps.mp3'
            },
            {
                name: 'What Lovers Do',
                image: IMAGE_ROOT + '/maroon5/what_lovers_do.png',
                music: MUSIC_ROOT + '/maroon/Maroon5_What_Lovers_Do.mp3'
            }
        ]
    }
    


]


for ( let i = 0 ; i < artists.length ; ++i ) {
   
    $(`#${artists[i].id}`).prepend(`
                    <div class="row gy-2">
                        <div class="col-12">
                            <div class="tt"></div>
                        </div>
                        <div class="col-12 main item pic">
                            <div class="col-12">
                                <div class="return">
                                    <a href="../main.html">
                                        <i class="bi bi-reply"></i>
                                    </a>
                                </div>
                            </div>
                        <div class="col-12 song-list">
                                <div class="title">
                                </div>
                        </div>


                        </div>
                    </div>
                `
); 

    $(`#${artists[i].id} .title`).html((`<h1><span class="linear-wipe">${artists[i].name}</span></h1>`));

    for ( let j in artists[i].songs ) {
        $(`#${artists[i].id} .song-list`).append(`<div class="col-12 fin">
            <div class="object">
                    <img class="image" src=${artists[i].songs[j].image} alt="">
                <p>${artists[i].songs[j].name}</p>
                <audio class="music" src=${artists[i].songs[j].music} controls></audio>
            </div>
        </div>`)
    }

    // $(`#${artists[i].id} .main`).css({'background-image': `url(${artists[i].imgbg})`})

}



