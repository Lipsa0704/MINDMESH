import Wrapper from "./Wrapper";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <h2>Composition Pattern Example</h2>

      <Wrapper>
        <Child />
      </Wrapper>
    </div>
  );
}

export default Parent;
