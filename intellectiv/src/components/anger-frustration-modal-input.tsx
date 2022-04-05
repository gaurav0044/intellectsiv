import React, { useState } from "react"
import { Modal } from "react-native";
import { useDispatch } from "react-redux";
import { addAngers } from "../redux/actions/index";
import { ANGER_LEVEL, FINISH, NEXT, STATUS_MODAL_ANIMATION_TYPE } from "../utils/constants"
import { AngerRsult } from "./anger-result";
import { AngerLevel, AngryMeter } from "./angry-meter"
import { BriefScope } from "./brief-scope"
import { BottomButton } from "./comman-component/atoms/submit-button"
import { StatusLines } from "./comman-component/status-line"
import { StatusComponentContainer } from "./comman-component/wrappers/status-component-container"
import { StatusContainer } from "./comman-component/wrappers/status-container"

type Props = {
    isModal: boolean;
    setModal: () => void
}

export const AngerFrustrationModalInput = (props: Props) => {

    const [slideNo, setSlideNo] = useState(1);
    const [value, setValue] = useState(0);
    const [selectedAngerLevel, setAngerLevel] = useState(0);
    const dispatch = useDispatch();

    const _slide = (): void => {
        if (slideNo == 3) {
            setSlideNo(1);
            setValue(0);
            setAngerLevel(0);
            props.setModal();
            return;
        } else if (slideNo == 2) {
            dispatch(
                addAngers({
                    "angerMeter": parseInt((value / 359 * 10).toString()),
                    "angerLevel": ANGER_LEVEL[selectedAngerLevel].level
                })
            );
        }
        setSlideNo(slideNo + 1);
    }

    return (
        <Modal
            visible={props.isModal}
            animationType={STATUS_MODAL_ANIMATION_TYPE}
        >
            <StatusContainer>
                <StatusLines
                    active={slideNo}
                    totalStatus={3}
                />
                <BriefScope />
                <StatusComponentContainer>
                    {slideNo === 1 && <AngryMeter {...{ value, setValue }} />}
                    {slideNo === 2 && <AngerLevel {...{ selectedAngerLevel, setAngerLevel }} />}
                    {slideNo === 3 && <AngerRsult />}
                </StatusComponentContainer>
                <BottomButton
                    text={slideNo == 3 ? FINISH : NEXT} onSubmit={_slide}
                />
            </StatusContainer>
        </Modal>)
}