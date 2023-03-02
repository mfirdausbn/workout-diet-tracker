import React from "react";
import { Button } from "flowbite-react";

const ButtonPills = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <div>
          <Button color="gray" pill={true}>
            Week 1
          </Button>
        </div>
        <div>
          <Button color="success" pill={true}>
            Week 2
          </Button>
        </div>
        <div>
          <Button color="gray" pill={true}>
            Week 3
          </Button>
        </div>
        <div>
          <Button color="success" pill={true}>
            Week 4
          </Button>
        </div>
        <div>
          <Button color="gray" pill={true}>
            Week 5
          </Button>
        </div>
        <div>
          <Button color="success" pill={true}>
            Week 6
          </Button>
        </div>
        <div>
          <Button color="gray" pill={true}>
            Week 7
          </Button>
        </div>
        <div>
          <Button color="success" pill={true}>
            Week 8
          </Button>
        </div>
        <div>
          <Button color="gray" pill={true}>
            Week 9
          </Button>
        </div>
        <div>
          <Button color="success" pill={true}>
            Week 10
          </Button>
        </div>
        <div>
          <Button color="gray" pill={true}>
            Week 11
          </Button>
        </div>
        <div>
          <Button color="success" pill={true}>
            Week 12
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonPills;
