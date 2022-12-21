import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { nanoid } from "nanoid";

import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";

import reproductionArray from "../../utils/reproductionArray";
import getRandomIntInRange from "../../utils/getRandomIntInRange";

import sound from '../../sounds/sound.ogg';

import classes from "./roulette.module.scss";

const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

const prizes = [
    {
        id: "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0",
        image: "https://s13emagst.akamaized.net/products/48339/48338380/images/res_a6d34a4dd70b5c775c7a7fa63c58d81e.jpg",
        text: "+ 1 credit 😀",
    },
    {
        id: "7d24b681-82d9-4fc0-b034-c82f9db11a59",
        image: "https://tricouri-cu-mesaje.ro/wp-content/uploads/2017/06/tricou-amuzant-pentru-studenti-n-ai-restanta-n-ai-prestanta-negru.jpg",
        text: "Restanță 😔",
    },
    {
        id: "9da9a287-952f-41bd-8c7a-b488938d7c7a",
        image: "https://thumbs.dreamstime.com/b/number-christmas-tree-decoration-white-background-130315676.jpg",
        text: "+ 4 credite 😁",
    },
    {
        id: "04106f3f-f99f-47e4-a62e-3c81fc8cf794",
        image: "https://en.pimg.jp/071/120/099/1/71120099.jpg",
        text: "+ 6 credite 😍",
    },
    {
        id: "23c551bf-8425-4ffd-b7c2-77c87844f89d",
        image: "https://pbs.twimg.com/media/Eo5GFtRXMAIsfAh.jpg",
        text: "10 la proiect 🤩",
    },
    {
        id: "e4060930-538f-4bf7-ab8e-8d2aa05fba43",
        image: "https://tricouri-cu-mesaje.ro/wp-content/uploads/2017/06/tricou-amuzant-pentru-studenti-n-ai-restanta-n-ai-prestanta-negru.jpg",
        text: "Restanță 😔",
    },
    {
        id: "fb121804-e4f6-4fce-bdd6-1e3189172f37",
        image: "https://www.shutterstock.com/image-vector/christmas-beige-certificate-red-santa-260nw-1553420792.jpg",
        text: "Diploma Studentul Anului 📜",
    },
    {
        id: "26ee933e-0858-481d-afe8-b30d3829242a",
        image: "https://tricouri-cu-mesaje.ro/wp-content/uploads/2017/06/tricou-amuzant-pentru-studenti-n-ai-restanta-n-ai-prestanta-negru.jpg",
        text: "Restanță 😔",
    },
    {
        id: "c769c2b1-df6e-4e6e-8985-53b531527b35",
        image: "https://media.istockphoto.com/id/675671208/vector/surprise-gift-box.jpg?s=612x612&w=0&k=20&c=eeXB6PaZMhkoWueTHpBBewzpLA6EyNNK46OfpNSzYbo=",
        text: "Test Surpriză ❓",
    },
    {
        id: "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1",
        image: "https://thumbs.dreamstime.com/b/feet-wool-socks-near-fireplace-christmas-time-concept-79253074.jpg",
        text: "O săptămână fără cursuri 😎",
    },
];

const API = {
    getPrizeIndex: async () => {
        const randomPrizeIndex = getRandomIntInRange(0, prizes.length - 1);
        const randomPrizeIndexOffset = prizes.length * 4;

        return randomPrizeIndex + randomPrizeIndexOffset;
    },
};

const App = () => {
    const [settings, setSettings] = useState({
        prizesWithText: {
            name: "Prizes with text",
            options: [false, true],
            value: true,
        },
        hideCenterDelimiter: {
            name: "Hide center delimiter",
            options: [false, true],
            value: false,
            forDesign: "Regular",
        },
        // hideTopArrow: {
        //   name: 'Hide top arrow',
        //   options: [false, true],
        //   value: false,
        //   forDesign: 'GracefulLines',
        // },
        // hideSideArrows: {
        //   name: 'Hide side arrows',
        //   options: [false, true],
        //   value: false,
        //   forDesign: 'GracefulLines',
        // },
        // replaceBottomArrowWithTopArrow: {
        //   name: 'Replace bottom arrow with top arrow',
        //   options: [false, true],
        //   value: false,
        //   forDesign: 'GracefulLines',
        // },
        soundWhileSpinning: {
            name: "Sound while spinning",
            options: [false, true],
            value: true,
        },
        spinningTime: {
            name: "Spinning time",
            options: ["3", "5", "10", "15", "20", "25", "30"],
            value: "30",
        },
    });

    const [prizeList, setPrizeList] = useState([]);
    const [start, setStart] = useState(false);
    const [spinning, setSpinning] = useState(false);
    const [prizeIndex, setPrizeIndex] = useState(0);

    useEffect(() => {
        const reproducedArray = [
            ...prizes,
            ...reproductionArray(prizes, prizes.length * 3),
            ...prizes,
            ...reproductionArray(prizes, prizes.length),
        ];

        const list = [...reproducedArray].map((item) => ({
            ...item,
            id: `${item.id}--${nanoid()}`,
        }));

        setPrizeList(list);

        console.log(sound);
        
        
    }, []);

    useEffect(() => {
        if (!prizeIndex || start) {
            return;
        }

        setStart(true);
    }, [prizeIndex, start]);

    useEffect(() => {
        if (!spinning || !prizeList.length) {
            return;
        }

        const prepare = async () => {
            const newPrizeIndex = await API.getPrizeIndex();
            setPrizeIndex(newPrizeIndex);
            setStart(false);

            const { id } = prizeList[newPrizeIndex];

            Toast.fire({ icon: "info", title: 'Ruleta a inceput! Mult noroc!' });
        };

        prepare();
    }, [spinning, prizeList]);

    const handleStart = () => {
        setSpinning(true);
    };

    const handlePrizeDefined = () => {
        Toast.fire({
            icon: "success",
            title: `🥳 Felicitari pentru castig! 🥳`,
            timer: 3000,
        });

        setSpinning(false);
    };

    const soundWhileSpinning = settings.soundWhileSpinning.value;
    const prizesWithText = settings.prizesWithText.value;
    const hideCenterDelimiter = settings.hideCenterDelimiter.value;
    const spinningTime = +settings.spinningTime.value;

    return (
        <div>
            <div className={classes["Roulette"]}>
                <audio controls>
                    <source src={sound} type="audio/ogg"/>
                </audio>
                <RoulettePro
                    type={"horizontal"}
                    prizes={prizeList}
                    start={start}
                    prizeIndex={prizeIndex}
                    onPrizeDefined={handlePrizeDefined}
                    spinningTime={spinningTime}
                    classes={{
                        wrapper:
                            classes["Roulette__pro-wrapper-additional-styles"],
                    }}
                    soundWhileSpinning={sound}
                    defaultDesignOptions={{
                        prizesWithText,
                        hideCenterDelimiter,
                    }}
                />
            </div>
            <div className={classes["RouletteActions"]}>
                <div className={classes["RouletteActions__GrayBlock"]}>
                    <div
                        className={
                            classes["RouletteActions__GrayBlock__ButtonWrapper"]
                        }
                    >
                        <button
                            onClick={handleStart}
                            className={classes["SpinButton"]}
                            type="button"
                        >
                            Încearcă-ți norocul! 🎰🎰🎰
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
