let idle;
let headShake;
let jump;

let hp;

const riveInstance = new rive.Rive({
    src: "./assets/rive/animal.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: ["controller", "healthbar"],
    onLoad: () => {
        riveInstance.resizeDrawingSurfaceToCanvas();

        let controller_imput = riveInstance.stateMachineInputs("controller");

        console.log(controller_imput);

        idle = controller_imput.find((input) => input.name === "Idle");
        headShake = controller_imput.find((input) => input.name === "Idle");
        jump = controller_imput.find((input) => input.name === "Jump");

        // HealthBar
        let health_inputs = riveInstance.stateMachineInputs("healthbar");
        hp = health_inputs.find((input) => input.name === "healthBar");
    },
});

export { idle, headShake, jump, hp };
