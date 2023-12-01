const { createApp } = Vue;

createApp({
    data() {
        return {
            activeIndex: 0,
            images: [
                'https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg',
                'https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg',
                'https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg',
                'https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg',
                'https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg'
            ],
            title: 'The Mandalorian',
            description: 'The Mandalorian is a Mandalorian in the Mandalorians who mandalores the mandalore',
            categories: [
                'Action',
                'Sci-fi',
                'Star Wars',
            ],
        }
    },
    methods: {
        changeSlideTo(index){
            if (index >= this.images.length || index < 0 ){
                return false;
            }

            this.activeIndex = index;
        },
        nextSlide(){
            this.activeIndex = this.activeIndex + 1;
            if (this.activeIndex >= this.images.length){
                this.activeIndex = 0;
            }
        },

        prevSlide(){
            this.changeSlideTo(this.activeIndex - 1)
        },

    },
}).mount('#app');


