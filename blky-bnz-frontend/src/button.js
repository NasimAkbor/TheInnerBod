function Button(prop) {
  return (
    <div class="navTab">
      <div class="individualTab" onClick={prop.click}>
        {prop.system}
      </div>
    </div>
  );
}

export default Button;
